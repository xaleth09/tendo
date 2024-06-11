import { useContext } from 'react';
import {FormContextType, FormContext} from "~/routes/feedback-form/form-context/FormContext"; // Adjust the path as needed

const useFormContext = (): FormContextType => {
    const context = useContext(FormContext);
    if (!context) {
        throw new Error('useFormContext must be used within a FormProvider');
    }
    return <FormContextType>context;
};

export default useFormContext;
