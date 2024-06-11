import type { MetaFunction } from "@remix-run/node";
import {FeedbackForm} from "~/routes/feedback-form/FeedbackForm";

export const meta: MetaFunction = () => {
  return [
    { title: "Tendo" },
    { name: "description", content: "Let's get some feedback!" },
  ];
};

export default function Index() {
  return (
      <FeedbackForm/>
  );
}
