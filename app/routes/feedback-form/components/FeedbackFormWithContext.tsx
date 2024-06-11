import {FormPage} from "~/components/general/FormPage";
import {Button, Card, H3} from "~/components/general";
import {useFakeFetchGETFormPage} from "~/api/fakeGETFormPage";
import {ActionType} from "~/api/types";
import {Prompts} from "~/routes/feedback-form/components/Prompts";
import useFormContext from "~/routes/feedback-form/form-context/useFormContext";
import {fakePOSTFormResponse} from "~/api/fakePOSTFormResponse";

export const FeedbackFormWithContext = () => {
    const {formResponse, updateFormResponse} = useFormContext()
    const {
        data,
        loading,
        fetchNextPage,
        fetchPreviousPage,
    } = useFakeFetchGETFormPage()

    if (loading) {
        return <H3>Some pretty loading state...</H3>
    }

    if (!data || !Object.keys(data).length) {
        return <H3>{`<Insert Image of storm trooper>`} &quot;Nothing to see here.. Move along.&quot;</H3>
    }

    const {
        header,
        header_copy,
        prompts,
        actions
    } = data;
    const {primary, secondary, tertiary} = actions || {}

    const handleChangeInput = (name: string, value: string | boolean | number | null | undefined) => {
        updateFormResponse(name, value)
    }

    const handleClick = (type: ActionType | undefined) => {
        switch (type) {
            case 'next':
                // save current prompt and input state
                fetchNextPage();
                break;
            case 'back':
                fetchPreviousPage();
                break;
            case 'skip':
                fetchNextPage();
                break;
            case 'submit':
                fakePOSTFormResponse(formResponse);
                break;
            default:
                break;
        }
    }

    const handlePrimaryClick = () => {
        handleClick(primary.type)
    }

    const handleSecondaryClick = () => {
        handleClick(secondary?.type)
    }

    const handleTertiaryClick = () => {
        handleClick(tertiary?.type)
    }

    console.table(formResponse)

    return (
        <FormPage
            header={header}
            headerCopy={header_copy}
            primaryButton={<Button onClick={handlePrimaryClick}>{primary.label}</Button>}
            secondaryButton={secondary ? (
                <Button
                    type={'secondary'}
                    onClick={handleSecondaryClick}
                >
                    {secondary.label}
                </Button>
            ) : null}
            tertiaryButton={tertiary ? (
                <Button
                    type={'tertiary'}
                    onClick={handleTertiaryClick}
                >
                    {tertiary.label}
                </Button>
            ) : null}
        >
            <Card>
                <Prompts onChange={handleChangeInput} prompts={prompts}/>
            </Card>
        </FormPage>
    )
}


