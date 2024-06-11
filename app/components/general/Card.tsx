import React from 'react'
import styled from "styled-components";
import {Column} from "~/components/general/Flex";
import {SPACING} from "~/design-tokens";

const StyledColumn = styled(Column)`
    border-radius: 8px;
    border: solid lightgray 1px;
    box-shadow: rgba(0, 0, 0, 0.24) 0 3px 8px;
    padding: ${SPACING.SM.px} ${SPACING.MD.px};
`

type Props = {
    backgroundColor?: string,
    children?: React.ReactNode
}

export const Card = ({backgroundColor = 'white', children}: Props) => {
    return (
        <StyledColumn backgroundColor={backgroundColor}>
                {children}
        </StyledColumn>
    )
}
