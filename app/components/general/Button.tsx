import React from 'react'
import styled from "styled-components";
import {COLORS, SIZES} from "~/design-tokens";

type StyledButtonProps = {
    type?: "primary" | "secondary" | "tertiary";
    size?: 'inline' | 'fullwidth';
    disabled?: boolean;
    loading?: boolean;
}

const StyledButton = styled.button<StyledButtonProps>`
    min-height: ${SIZES.MD.px};
    max-width: 75%; // TODO: add media query
    padding: ${SIZES.XS.px} ${SIZES.SM.px};
    border: 1px solid ${COLORS.BLACK};
    border-radius: ${SIZES.MD.px};
    cursor: pointer;
    ${({size, disabled, loading}) => `
        width: ${size === 'fullwidth' ? '100%' : 'initial'};
    `}
`

type Props = {
    onClick?: (event?: React.MouseEvent<HTMLButtonElement>) => void;
    children: string | string[];
    className?: string;
} & StyledButtonProps;

export const Button = ({
                           size = 'fullwidth',
                           disabled,
                           loading,
                           onClick,
                           children,
                           className
                       }: Props) => {

    const handleOnClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        if (onClick) {
            onClick(event);
        }
    }

    return (
        <StyledButton
            size={size}
            disabled={disabled}
            loading={loading}
            onClick={handleOnClick}
            className={className}
        >
            {children}
        </StyledButton>
    )
}
