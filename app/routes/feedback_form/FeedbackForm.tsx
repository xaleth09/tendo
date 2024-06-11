import {FormPage} from "~/components/general/FormPage";
import {Button, Card, Spacing, Span} from "~/components/general";

export const FeedbackForm = () => {

    return (
        <FormPage
            header={"This is the question i'm asking you!"}
            headerCopy={"This is the description explaining the question or what i want from you."}
            primaryButton={<Button>DO THE THING!</Button>}
        >
            <Card>
                <Span>rawr</Span>
            </Card>
            <Spacing height={'MD'}/>
            <Card>
                <Span>rawr</Span>
            </Card>
            <Spacing height={'MD'}/>
            <Card>
                <Span>rawr</Span>
            </Card>
            <Spacing height={'MD'}/>
            <Card>
                <Span>rawr</Span>
            </Card>
        </FormPage>
    )
}
