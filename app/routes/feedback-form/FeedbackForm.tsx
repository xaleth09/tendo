import {FeedbackFormWithContext} from "~/routes/feedback-form/components/FeedbackFormWithContext";
import {FormProvider} from "~/routes/feedback-form/form-context/FormContext";

export const FeedbackForm = () => {
    return (
        <FormProvider>
            <FeedbackFormWithContext/>
        </FormProvider>
    )
}


