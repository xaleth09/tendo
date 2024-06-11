import styled from "styled-components";
import {H1, Span} from "~/components/general/typography";
import {Column} from "~/components/general/Flex";
import React, {ReactElement} from "react";
import {Button} from "~/components/general/Button";
import {SPACING} from "~/design-tokens";
import {Spacing} from "~/components/general/Spacing";

const PageLayout = styled.div`
    display: grid;
    grid-template-columns: 1fr 3fr 1fr; // TODO: Media query to change size of middle column
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
    background-color: #BEE3E8;
`

const Content = styled(Column)`
    padding: 0 ${SPACING.MD.px};
`

const ContentOffsetWrapper = styled(Column)`
    margin-top: -${SPACING.LG.px};
`

const BottomAnchoredButtons = styled(Column)`
    width: 100%;
    padding: ${SPACING.SM.px};
    gap: ${SPACING.XS.px};
    box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);
`

type Props = {
    header?: string;
    headerCopy?: string;
    primaryButton?: ReactElement<typeof Button>,
    secondaryButton?: ReactElement<typeof Button> | null,
    tertiaryButton?: ReactElement<typeof Button> | null,
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
            <PageContent>
                <HeaderContent backgroundColor={'lightgrey'} flexGrow={1}>
                    <H1 color={'#333333'}>{header}</H1>
                    <Spacing height={'SM'}/>
                    {headerCopy ? <Span>{headerCopy}</Span> : null}
                </HeaderContent>
                <Content backgroundColor={"white"} flexGrow={10}>
                    <ContentOffsetWrapper>
                        {children}
                    </ContentOffsetWrapper>
                </Content>
                { primaryButton || secondaryButton || tertiaryButton ? (
                    <BottomAnchoredButtons
                        centerHorizontally
                        backgroundColor={'white'}
                    >
                        {tertiaryButton ? tertiaryButton : null}
                        {secondaryButton ? secondaryButton : null}
                        {primaryButton ? primaryButton : null}
                    </BottomAnchoredButtons>
                ): null}
            </PageContent>
        </PageLayout>
    )
}
