// (1) Let's create our first integration test by first importing all our dependencies
import React from "react";
import { mount } from "enzyme";
import Root from "Root";
import App from "components/App";

// (2) And here we describe the test cases
it("can fetch a list of comments and display them", () => {
  // Attenpt to render the entire app
  // find the 'fetchComments' button and click it
  // Expect to find a list of commments
});
