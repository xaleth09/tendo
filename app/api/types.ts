export type FormPage = {
    page_index: number;
    next_page_index: number;
    header?: string;
    header_copy?: string;
    prompts: Prompt[]
    actions: {
        primary: Action;
        secondary?: Action;
        tertiary?: Action;
    }
}

export type Prompt = {
    id: string;
    prompt: string;
    inputs: Input[] | [];
}

export type Response = number | string | boolean | null;

export type Input = {
    name: string;
    type: 'text-area' | 'boolean' | 'star-rating' | 'happiness-rating';
    placeholder: string | null;
    default_value: Response;
    optional: boolean;
}

export type ActionType = 'next' | 'back' | 'submit' | 'skip'

export type Action = {
    type: ActionType;
    label: string;
}
