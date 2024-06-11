import styled from 'styled-components'
import {SizeKeys, SIZES} from "~/design-tokens";

type SpacerProps = {
    height?: SizeKeys,
    width?: SizeKeys,
}

const Spacer = styled.div<SpacerProps>`
    width: ${({width}) => width ? SIZES[width].px : 0};
    height: ${({height}) => height ? SIZES[height].px : 0};
`

export const Spacing = ({height, width}: SpacerProps) => (
    <Spacer height={height} width={width}/>
)
