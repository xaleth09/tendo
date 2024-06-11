import rawData from '../patient-feedback-raw-data.json'
import {FormPage, Prompt} from "~/api/types";

type PromptData = {
    patient_first_name: string | string[] | undefined,
    doctor_last_name: string | undefined,
    diagnosis_name: string | undefined,
    appointment_date_time: string | undefined,
}

const generatePrompts = ({
                             patient_first_name,
                             doctor_last_name,
                             diagnosis_name,
                             appointment_date_time
                         }: PromptData): Prompt[] => {

    const patientFirstNameString = patient_first_name ? ` ${patient_first_name}` : '';
    const doctorLastNameString = doctor_last_name ? ` ${doctor_last_name}` : '';
    const appointmentDateTimeString = appointment_date_time ? ` on ${appointment_date_time}` : '';
    const diagnosisNameString = diagnosis_name ? ` with ${diagnosis_name}` : '';

    const prompt1: Prompt = {
        id: 'some-unique-hash-1',
        prompt: `Hi${patientFirstNameString},\nOn a scale of 1-10, would you recommend Dr${doctorLastNameString} to a friend or family member?\n\n1 = Would not recommend, 10 = Would strongly recommend.`,
        inputs: [{
            name: 'doctor-recommendation',
            type: 'star-rating',
            placeholder: '',
            default_value: '',
            optional: false,
        }]
    }

    const prompt2: Prompt = {
        id: 'some-unique-hash-2',
        prompt: `Thank you!\nYou were diagnosed${diagnosisNameString} during your appointment${appointmentDateTimeString}.\n\nDid Dr${doctorLastNameString} explain how to manage this diagnosis in a way you could understand?`,
        inputs: [{
            name: 'doctor-explained-diagnosis',
            type: 'boolean',
            placeholder: null,
            default_value: null,
            optional: false,
        }]
    };

    const prompt3: Prompt = {
        id: 'some-unique-hash-3',
        prompt: `We appreciate the feedback.\n\nOne last question:\nHow do you feel about being diagnosed${diagnosisNameString}?`,
        inputs: [
            {
                name: 'feeling-about-diagnosis',
                type: 'happiness-rating',
                placeholder: null,
                default_value: null,
                optional: false,
            },
            {
                name: 'extra-feelings-about-diagnosis',
                type: 'text-area',
                placeholder: 'Anything else you would like us to know about how you feel about your diagnosis?',
                default_value: '',
                optional: true,
            }]
    };

    return [
        prompt1,
        prompt2,
        prompt3,
    ];
}

const getPromptDataFromBundle = () => {
    const bundle = rawData;
    const {entry: entries} = bundle;
    return entries.reduce<PromptData>((parsedData, {resource}) => {
        const {resourceType} = resource
        switch (resourceType) {
            case 'Patient': {
                const {name} = resource
                parsedData.patient_first_name = name?.[0]?.given;
                break;
            }
            case 'Doctor': {
                const {name} = resource
                parsedData.doctor_last_name = name?.[0]?.family;
                break;
            }
            case 'Appointment': {
                const {period} = resource
                parsedData.appointment_date_time = period?.start;
                break;
            }
            case 'Diagnosis': {
                const {code} = resource
                parsedData.diagnosis_name = code?.coding?.[0]?.name;
                break;
            }
        }

        return parsedData
    }, {
        patient_first_name: '',
        doctor_last_name: '',
        diagnosis_name: '',
        appointment_date_time: ''
    })
}

const generateActionsForPageNum = ({page_num, is_last_page}: { page_num: number, is_last_page: boolean }) => {
    if (page_num === 1) {
        return {
            primary: {type: 'next', label: 'Next'}
        }
    }

    if (is_last_page) {
        return {
            primary: {type: 'submit', label: 'Submit'},
            tertiary: {type: 'back', label: 'Back'},
        }
    }

    return {
        primary: {type: 'next', label: 'Next'},
        tertiary: {type: 'back', label: 'Back'},
    }
}

export const mockControllerToTransformBundleIntoFormData = ({page_num}: { page_num: number }): FormPage => {
    const parsedPromptDataFromBundle = getPromptDataFromBundle();
    const prompts = generatePrompts(parsedPromptDataFromBundle);
    const isLastPage = prompts.length === page_num;
    const actions = generateActionsForPageNum({page_num, is_last_page: isLastPage})
    return {
        page_index: page_num,
        next_page_index: page_num + 1,
        header: `We'd love to hear your feedback!`,
        // assumes 1 per page, but could config to have what ever kind of chunking needed
        prompts: prompts[page_num - 1] ? [prompts[page_num - 1]] : [],
        // @ts-expect-error: type not quite aligning. remove this to see full error.
        actions,
    }
}
