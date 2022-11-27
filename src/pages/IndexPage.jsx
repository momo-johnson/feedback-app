import React from "react";
import FeedbackList from "../components/FeedbackList";
import Feedbackstats from "../components/Feedbackstats";
import FeedbackForm from "../components/FeedbackForm";

function IndexPage(props) {
  return (
    <React.Fragment>
      <FeedbackForm />
      <Feedbackstats />
      <FeedbackList />
    </React.Fragment>
  );
}

export default IndexPage;
