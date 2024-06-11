export type Page = {
    page_index: string,
    next_page_index: string,
    header?: string,
    header_copy?: string,
    inputs: Input[],
    actions: {
        primary: {},
        secondary?: {},
        tertiary?: {},
    }
}

export type Response = number | string | boolean | null;

export type Input =
    {
        type: 'text-area' | 'boolean' | 'rating',
        placeholder
            :
            '',
        default_value
            :
            Response
        response_type: 'number' | 'string' | 'boolean'
    }

export type Action = {
    label: string,
}
