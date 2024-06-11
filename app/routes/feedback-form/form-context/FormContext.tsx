import React, { createContext, useState, ReactNode } from 'react';

interface FormResponse {
    [key: string]: any;
}

export interface FormContextType {
    formResponse: FormResponse;
    updateFormResponse: (name: string, value: any) => void;
}

const FormContext = createContext<FormContextType | undefined>(undefined);

const FormProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [formResponse, setFormResponse] = useState<FormResponse>({});

    const updateFormResponse = (name: string, value: any) => {
        setFormResponse((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    return (
        <FormContext.Provider value={{ formResponse, updateFormResponse }}>
            {children}
        </FormContext.Provider>
    );
};

export { FormProvider, FormContext };
