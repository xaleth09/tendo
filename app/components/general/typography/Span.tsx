import React from 'react';
import styled from "styled-components";
import {BaseTypography, BaseTypographyProps} from "~/components/general/typography/BaseTypography";

const StyledSpan = styled(BaseTypography)`
    line-height: 1.35;
`

type Props = BaseTypographyProps<'span'>;

export const Span: React.FC<Props> = ({centered, color, whiteSpace, children, className, style, ...props}) => {
    return (
        <StyledSpan
            forwardedAs={'span'}
            centered={centered}
            color={color}
            whiteSpace={whiteSpace}
            className={className}
            style={style}
        >
            {children}
        </StyledSpan>
    );
};

export default Span;
