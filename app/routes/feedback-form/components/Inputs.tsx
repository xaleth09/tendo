import {Input} from "~/api/types";
import {Column, Row, Spacing, Span} from "~/components/general";
import styled from "styled-components";
import {SPACING} from "~/design-tokens";
import useFormContext from "~/routes/feedback-form/form-context/useFormContext";

type Props = {
    promptId: string,
    inputs: Input[],
    onChange: (value: string, name: string) => void,
}

const InputWrapper = styled(Column)`
    gap: ${SPACING.LG.px};
`

const TextArea = styled.textarea`
    padding: ${SPACING.XS.px};
`

const RadioRow = styled(Row)`
    flex-wrap: wrap;
    gap: ${SPACING.XS.px};
`

const Label = styled.label`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    gap: ${SPACING.XXXS.px};
`

export const Inputs = ({
                           promptId,
                           inputs,
                           onChange,
                       }: Props) => {
    const {formResponse} = useFormContext()

    return (
        <InputWrapper>
            {inputs.map((input) => {
                const {
                    name,
                    type,
                    placeholder,
                    default_value,
                    optional
                } = input;

                const value = formResponse[name]
                switch (type) {
                    case 'text-area': {
                        return (
                            <TextArea
                                key={`${promptId}-${type}-${name}`}
                                value={value}
                                onChange={(e) => onChange(name, e.target.value)}
                                rows={5}
                                cols={40}
                                placeholder={placeholder || ''}
                            />
                        );
                    }
                    case 'boolean': {
                        return (
                            <Row key={`${promptId}-${type}-${name}`}>
                                <Label>
                                    <input
                                        type="radio"
                                        value="yes"
                                        checked={value === 'yes'}
                                        onChange={() => onChange(name, 'yes')}
                                    />
                                    <Span>Yes</Span>
                                </Label>
                                <Spacing width={'MD'}/>
                                <Label>
                                    <input
                                        type="radio"
                                        value="no"
                                        checked={value === 'no'}
                                        onChange={() => onChange(name, 'no')}
                                    />
                                    <Span>No</Span>
                                </Label>
                            </Row>
                        );
                    }
                    case 'star-rating': {
                        const stars = Array(10).fill(null)
                        return (
                            <RadioRow key={`${promptId}-${type}-${name}`}>
                                {stars.map((_, index) => {
                                    const star = index + 1;
                                    return (
                                        <Label key={star}>
                                            <input
                                                type="radio"
                                                value={star}
                                                checked={value === star}
                                                onChange={() => onChange(name, star)}
                                            />
                                            <Span>{star} Star{star > 1 ? 's' : ''}</Span>
                                        </Label>
                                    )
                                })}
                            </RadioRow>
                        );
                    }
                    case 'happiness-rating': {
                        const happinessRatings = Array(10).fill(null)

                        return (
                            <RadioRow key={`${promptId}-${type}-${name}`}>
                                {happinessRatings.map((_, index) => {
                                    const rating = index + 1;
                                    return (
                                        <Label key={rating}>
                                            <input
                                                type="radio"
                                                value={rating}
                                                checked={value === rating}
                                                onChange={() => onChange(name, rating)}
                                            />
                                            {rating}
                                        </Label>
                                    )
                                })}
                            </RadioRow>
                        );
                    }
                    default:
                        return null;
                }

                return <></>
            })}
        </InputWrapper>
    )
}
