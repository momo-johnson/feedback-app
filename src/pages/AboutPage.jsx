import React from "react";
import Card from "../shared/Card";
import { Link } from "react-router-dom";

function AboutPage(props) {
  return (
    <div>
      <Card>
        <h1>About this Project</h1>
        <p>This is a react app to leave feedback for product service</p>
        <i>version 1.0.0</i>
        <p>
          <Link to="/">Home</Link>
        </p>
      </Card>
    </div>
  );
}

export default AboutPage;
