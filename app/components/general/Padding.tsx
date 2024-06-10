import React from 'react';
import styled from 'styled-components';
import {SizeKeys, SPACING} from '../../design-tokens';
import {Column, ColumnProps} from "@/app/components/Flex";

type PaddingProps = {
    size: SizeKeys;
    topPadding?: SizeKeys;
    rightPadding?: SizeKeys;
    bottomPadding?: SizeKeys;
    leftPadding?: SizeKeys;
    children: React.ReactNode;
} & Pick<ColumnProps, 'flexGrow'>;

const BasePadding = styled(Column)<PaddingProps>`
    ${({size, topPadding, rightPadding, bottomPadding, leftPadding}: PaddingProps) => `
      padding-top: ${SPACING[topPadding || size].px};
      padding-right: ${SPACING[rightPadding || size].px};
      padding-bottom: ${SPACING[bottomPadding || size].px};
      padding-left: ${SPACING[leftPadding || size].px};
  `}
`;

export const Padding = ({
                            size,
                            topPadding,
                            rightPadding,
                            bottomPadding,
                            leftPadding,
                            flexGrow,
                            children
                        }: PaddingProps) => (
    <BasePadding
        wrap={false}
        size={size}
        topPadding={topPadding}
        rightPadding={rightPadding}
        bottomPadding={bottomPadding}
        leftPadding={leftPadding}
        flexGrow={flexGrow}
    >
        {children}
    </BasePadding>
);
