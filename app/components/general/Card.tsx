import React from 'react'
import styled from "styled-components";
import {Column} from "@/app/components/Flex";

const StyledColumn = styled(Column)`
    border-radius: 8px;
    border: solid lightgray 1px;
    box-shadow: rgba(0, 0, 0, 0.24) 0 3px 8px;
`

const ClickableWrapper = styled.div<{ onClick: (() => void) | undefined }>`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    padding: 24px;
    border-radius: 8px;
`

type Props = {
    backgroundColor?: string,
    onClick?: (() => void) | undefined
    children?: React.ReactNode;
    className?: string;
}

export const Card = ({backgroundColor = 'white', onClick, children, className}: Props) => {
    return (
        <StyledColumn flexGrow={1} backgroundColor={backgroundColor}>
            <ClickableWrapper onClick={onClick} className={className}>
                {children}
            </ClickableWrapper>
        </StyledColumn>
    )
}
