import styled from "styled-components";
import {H1, Span} from "~/components/general/typography";
import {Column} from "~/components/general/Flex";
import React, {ReactElement} from "react";
import {Button} from "~/components/general/Button";
import {COLORS, SPACING} from "~/design-tokens";
import {Spacing} from "~/components/general/Spacing";

const PageLayout = styled.div`
    display: grid;
    grid-template-columns: 1fr 3fr 1fr;
    height: 100%;
    width: 100%;
`

const PageContent = styled(Column)`
    grid-column: 2;
    height: 100%;
`

const HeaderContent = styled(Column)`
    padding: ${SPACING.XXL.px} ${SPACING.LG.px} ${SPACING.MD.px};
    min-height: 128px;
`

const Content = styled(Column)`
    padding: 0 ${SPACING.MD.px};
`

const ContentOffsetWrapper = styled(Column)`
    margin-top: -${SPACING.SM.px};
`

const BottomAnchoredButtons = styled(Column)`
    width: 100%;
    padding: ${SPACING.SM.px};
    border-top: 1px solid ${COLORS.GREY};
`

type Props = {
    header?: string;
    headerCopy?: string;
    primaryButton?: ReactElement<typeof Button>,
    secondaryButton?: ReactElement<typeof Button>,
    tertiaryButton?: ReactElement<typeof Button>,
    children: React.ReactNode;
}

export const FormPage = ({
                             header,
                             headerCopy,
                             primaryButton,
                             secondaryButton,
                             tertiaryButton,
                             children,
                         }: Props) => {

    return (
        <PageLayout>
            <PageContent backgroundColor={'chartreuse'}>
                <HeaderContent backgroundColor={"dodgerblue"} flexGrow={1}>
                    <H1>{header}</H1>
                    <Spacing height={'SM'}/>
                    {headerCopy ? <Span>{headerCopy}</Span> : null}
                </HeaderContent>
                <Content backgroundColor={"orchid"} flexGrow={10}>
                    <ContentOffsetWrapper>
                        {children}
                    </ContentOffsetWrapper>
                </Content>
                { primaryButton || secondaryButton || tertiaryButton ? (
                    <BottomAnchoredButtons
                        centerHorizontally
                        backgroundColor={COLORS.WHITE}
                    >
                        {primaryButton ? primaryButton : null}
                        {secondaryButton ? secondaryButton : null}
                        {tertiaryButton ? tertiaryButton : null}
                    </BottomAnchoredButtons>
                ): null}
            </PageContent>
        </PageLayout>
    )
}
