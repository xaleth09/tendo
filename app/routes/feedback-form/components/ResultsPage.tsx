import {Button, Card, FormPage, H3, Spacing, Span} from "~/components/general";
import {readJsonFromLocalStorage} from "~/api/fakePOSTFormResponse";


// TODO: Actually navigate to this as a new page instead of swapping w/ internals of FeedbackFormWithContext
export const ResultsPage = () => {
    const loadedData = readJsonFromLocalStorage();
    const responseString = JSON.stringify(loadedData)

    return (
        <FormPage
            header={"Thanks again!"}
            primaryButton={<Button onClick={() => {}}>Done</Button>}
        >
            <Card>
                <H3>{`Here's what we've heard:`}</H3>
                <Spacing height={'MD'}/>
                <Span>
                    {responseString}
                </Span>
            </Card>
        </FormPage>
    )
}
