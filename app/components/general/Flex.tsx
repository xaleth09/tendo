import React, {FC} from 'react';
import styled from 'styled-components';
import {COLORS, ColorValues} from '~/design-tokens';

type FlexProps = {
    flexGrow?: number;
    flexShrink?: number;
    flexBasis?: number | string;
    wrap?: boolean;
    wrapReverse?: boolean;
    center?: boolean;
    centerVertically?: boolean;
    top?: boolean;
    bottom?: boolean;
    spaceBetween?: boolean;
    spaceAround?: boolean;
    spaceEvenly?: boolean;
    left?: boolean;
    right?: boolean;
    centerHorizontally?: boolean;
    stretchItems?: boolean;
    baseline?: boolean;
    backgroundColor?: ColorValues;
    gap?: string;
    testID?: string;
    className?: string; // { [string]: string | number, ... },
    children?: React.ReactNode;
};

export type ColumnProps = {
    // align-content
    columnStart?: boolean;
    columnEnd?: boolean;
    columnCenter?: boolean;
    columnStretch?: boolean;
    columnSpaceBetween?: boolean;
    columnSpaceAround?: boolean;
} & FlexProps;

export type RowProps = {
    // align-content
    rowStart?: boolean;
    rowEnd?: boolean;
    rowCenter?: boolean;
    rowStretch?: boolean;
    rowSpaceBetween?: boolean;
    rowSpaceAround?: boolean;
} & FlexProps;

type FlexWrap = 'wrap' | 'wrap-reverse' | 'nowrap';
const getFlexWrap = (wrap?: boolean, wrapReverse?: boolean): FlexWrap => {
    if (wrap) {
        return 'wrap';
    }

    if (wrapReverse) {
        return 'wrap-reverse';
    }

    return 'nowrap';
};

type JustifyContent = 'center' | 'flex-start' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly' | '';
const getJustifyContent = (
    center?: boolean,
    centerInFlexDirection?: boolean,
    justifyFlexStart?: boolean,
    justifyFlexEnd?: boolean,
    spaceBetween?: boolean,
    spaceAround?: boolean,
    spaceEvenly?: boolean,
): JustifyContent => {
    if (center || centerInFlexDirection) {
        return 'center';
    }

    if (justifyFlexStart) {
        return 'flex-start';
    }

    if (justifyFlexEnd) {
        return 'flex-end';
    }

    if (spaceBetween) {
        return 'space-between';
    }

    if (spaceAround) {
        return 'space-around';
    }

    if (spaceEvenly) {
        return 'space-evenly';
    }

    return '';
};

type AlignItems = 'center' | 'flex-start' | 'flex-end' | 'stretch' | 'baseline' | '';
const getAlignItems = (
    center?: boolean,
    centerInFlexDirection?: boolean,
    alignFlexStart?: boolean,
    alignFlexEnd?: boolean,
    stretchItems?: boolean,
    baseline?: boolean,
): AlignItems => {
    if (center || centerInFlexDirection) {
        return 'center';
    }

    if (alignFlexStart) {
        return 'flex-start';
    }

    if (alignFlexEnd) {
        return 'flex-end';
    }

    if (stretchItems) {
        return 'stretch';
    }

    if (baseline) {
        return 'baseline';
    }
    return '';
};

type AlignContent =
    | 'center'
    | 'flex-start'
    | 'flex-end'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
    | 'stretch'
    | '';
const getAlignContent = (
    center?: boolean,
    start?: boolean,
    end?: boolean,
    spaceBetween?: boolean,
    spaceAround?: boolean,
    stretch?: boolean,
): AlignContent => {
    if (center) {
        return 'center';
    }

    if (start) {
        return 'flex-start';
    }

    if (end) {
        return 'flex-end';
    }

    if (spaceBetween) {
        return 'space-between';
    }

    if (spaceAround) {
        return 'space-around';
    }

    if (stretch) {
        return 'stretch';
    }

    return '';
};

type StyledFlexProps = {
    $flexDirection: 'row' | 'column';
    $flexWrap: FlexWrap;
    $flexJustifyContent: JustifyContent;
    $flexAlignContent: AlignContent;
    $flexAlignItems: AlignItems;
    $flexGrow?: number;
    $flexShrink?: number;
    $flexBasis?: number | string;
    $backgroundColor?: ColorValues;
    $gap?: string;
    testID?: string;
};
const StyledFlex = styled.div<StyledFlexProps>`
    display: flex;
    ${({
           $flexGrow,
           $flexShrink,
           $flexBasis,
           $flexDirection,
           $flexWrap,
           $flexJustifyContent,
           $flexAlignContent,
           $flexAlignItems,
           $backgroundColor,
           $gap,
       }) => `
    ${$flexGrow ? `flex-grow: ${$flexGrow};` : ''}
    ${$flexShrink ? `flex-shrink: ${$flexBasis};` : ''}
    ${$flexBasis ? `flex-basis: ${$flexBasis};` : ''}
    ${$flexDirection ? `flex-direction: ${$flexDirection};` : ''}
    ${$flexWrap ? `flex-wrap: ${$flexWrap};` : ''}
    ${$flexJustifyContent ? `justify-content: ${$flexJustifyContent};` : ''}
    ${$flexAlignContent ? `align-content: ${$flexAlignContent};` : ''}
    ${$flexAlignItems ? `align-items: ${$flexAlignItems};` : ''}
    ${$gap ? `gap: ${$gap};` : ''}
    background-color: ${$backgroundColor ?? COLORS.TRANSPARENT};
  `}
`;

export const Row: FC<RowProps> = ({
                                      flexGrow,
                                      flexShrink,
                                      flexBasis,
                                      wrap,
                                      wrapReverse,
                                      center,
                                      centerVertically,
                                      top,
                                      bottom,
                                      spaceBetween,
                                      spaceAround,
                                      spaceEvenly,
                                      left,
                                      right,
                                      baseline,
                                      centerHorizontally,
                                      stretchItems,
                                      rowStart,
                                      rowEnd,
                                      rowCenter,
                                      rowStretch,
                                      rowSpaceBetween,
                                      rowSpaceAround,
                                      testID,
                                      children,
                                      backgroundColor,
                                      gap,
                                      className,
                                  }) => {
    const flexWrap = getFlexWrap(wrap, wrapReverse);
    const flexJustifyContent = getJustifyContent(
        center,
        centerHorizontally,
        left,
        right,
        spaceBetween,
        spaceAround,
        spaceEvenly,
    );
    const flexAlignItems = getAlignItems(center, centerVertically, top, bottom, stretchItems, baseline);
    const flexAlignContent = getAlignContent(rowCenter, rowStart, rowEnd, rowSpaceBetween, rowSpaceAround, rowStretch);

    return (
        <StyledFlex
            $flexGrow={flexGrow}
            $flexShrink={flexShrink}
            $flexBasis={flexBasis}
            $flexDirection="row"
            $flexWrap={flexWrap}
            $flexJustifyContent={flexJustifyContent}
            $flexAlignItems={flexAlignItems}
            $flexAlignContent={flexAlignContent}
            testID={testID}
            className={className}
            $gap={gap}
            $backgroundColor={backgroundColor}
        >
            {children}
        </StyledFlex>
    );
};

export const Column: FC<ColumnProps> = ({
                                            flexGrow,
                                            flexShrink,
                                            flexBasis,
                                            wrap,
                                            wrapReverse,
                                            center,
                                            centerVertically,
                                            top,
                                            bottom,
                                            spaceBetween,
                                            spaceAround,
                                            spaceEvenly,
                                            left,
                                            right,
                                            baseline,
                                            centerHorizontally,
                                            stretchItems,
                                            columnStart,
                                            columnEnd,
                                            columnCenter,
                                            columnStretch,
                                            columnSpaceBetween,
                                            columnSpaceAround,
                                            testID,
                                            children,
                                            backgroundColor,
                                            gap,
                                            className,
                                        }) => {
    const flexWrap = getFlexWrap(wrap, wrapReverse);
    const flexJustifyContent = getJustifyContent(
        center,
        centerVertically,
        top,
        bottom,
        spaceBetween,
        spaceAround,
        spaceEvenly,
    );
    const flexAlignItems = getAlignItems(center, centerHorizontally, left, right, stretchItems, baseline);
    const flexAlignContent = getAlignContent(
        columnCenter,
        columnStart,
        columnEnd,
        columnSpaceBetween,
        columnSpaceAround,
        columnStretch,
    );

    return (
        <StyledFlex
            $flexGrow={flexGrow}
            $flexShrink={flexShrink}
            $flexBasis={flexBasis}
            $flexDirection="column"
            $flexWrap={flexWrap}
            $flexJustifyContent={flexJustifyContent}
            $flexAlignItems={flexAlignItems}
            $flexAlignContent={flexAlignContent}
            testID={testID}
            className={className}
            $gap={gap}
            $backgroundColor={backgroundColor}
        >
            {children}
        </StyledFlex>
    );
};
