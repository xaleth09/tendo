import React from 'react';
import {BaseTypography, BaseTypographyProps} from "@/app/components/typography/BaseTypography";
import styled from "styled-components";

const StyledSpan = styled(BaseTypography)``

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
