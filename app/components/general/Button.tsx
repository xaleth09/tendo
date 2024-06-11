import React from 'react'
import styled from "styled-components";
import {COLORS, SIZES} from "~/design-tokens";

type StyledButtonProps = {
    size?: 'inline' | 'fullwidth';
    disabled?: boolean;
    loading?: boolean;
    backgroundColor?: string;
    textColor?: string,
    borderColor?: string,
}

const StyledButton = styled.button<StyledButtonProps>`
    min-height: ${SIZES.MD.px};
    max-width: 75%; // TODO: add media query 50% >MD, 100% SM>=
    padding: ${SIZES.XS.px} ${SIZES.SM.px};
    border: 1px solid ${COLORS.BLACK};
    border-radius: ${SIZES.MD.px};
    cursor: pointer;
    transition: 0.05s all;
    box-shadow: 7px 6px 28px 1px rgba(0, 0, 0, 0.24);


    ${({
           size,
           disabled,
           loading,
           backgroundColor,
           textColor,
           borderColor,
       }) => `
        width: ${size === 'fullwidth' ? '100%' : 'initial'};
        border-color: ${borderColor};
        background-color: ${backgroundColor};
        color: ${textColor};
    `}
    &:active {
        transform: scale(0.98);
        /* Scaling button to 0.98 to its original size */
        box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24);
        /* Lowering the shadow */
    }
`

type ButtonType = "primary" | "secondary" | "tertiary";

type Props = {
    type?: ButtonType;
    onClick?: (event?: React.MouseEvent<HTMLButtonElement>) => void;
    children: string | string[];
    className?: string;
} & StyledButtonProps;

const getButtonColors = (type: ButtonType) => {
    switch (type) {
        case "secondary":
            return {
                textColor: '#D9326F',
                backgroundColor: 'white',
                borderColor: 'lightgrey',
            }
        case "tertiary":
            return {
                textColor: 'black',
                backgroundColor: 'transparent',
                borderColor: 'transparent',
            }
        case "primary":
        default:
            return {
                textColor: 'white',
                backgroundColor: '#D9326F',
                borderColor: 'lightgrey',
            }
    }
}

export const Button = ({
                           type = 'primary',
                           size = 'fullwidth',
                           disabled,
                           loading,
                           onClick,
                           children,
                           className
                       }: Props) => {

    const {textColor, backgroundColor, borderColor,} = getButtonColors(type)

    const handleOnClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        if (onClick) {
            onClick(event);
        }
    }

    return (
        <StyledButton
            disabled={disabled}
            loading={loading}
            onClick={handleOnClick}
            size={size}
            textColor={textColor}
            borderColor={borderColor}
            backgroundColor={backgroundColor}
            className={className}
        >
            {children}
        </StyledButton>
    )
}
