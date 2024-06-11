import {Prompt} from "~/api/types";
import {Spacing, Span} from "~/components/general";
import React from "react";
import {Inputs} from "~/routes/feedback-form/components/Inputs";
import styled from "styled-components";

type Props = {
    prompts: Prompt[]
    onChange: (value: string, name: string) => void;
}

const BiggerSpan = styled(Span)`
    font-size: 1.125rem;
`

export const Prompts = ({prompts, onChange}: Props) => {

    return (
        <>
            {prompts.map(({id, prompt, inputs}) => {
                const lines = prompt.split('\n');

                return (
                    <React.Fragment key={id}>
                        <BiggerSpan>
                            {lines.map((line, index) => (
                            <React.Fragment key={index}>
                                {line}
                                {index < lines.length - 1 && <br/>}
                            </React.Fragment>
                        ))}
                        </BiggerSpan>
                        <Spacing height={'LG'}/>
                        <Inputs promptId={id} inputs={inputs} onChange={onChange}/>
                    </React.Fragment>
                )
            })}
        </>
    )
}
