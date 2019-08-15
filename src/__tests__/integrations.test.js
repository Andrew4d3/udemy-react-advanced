import React from "react";
import { mount } from "enzyme";
import Root from "Root";
import App from "components/App";

it("can fetch a list of comments and display them", () => {
  // (2) Let's implement our test case logic
  // Attenpt to render the entire app
  const wrapped = mount(
    <Root>
      <App />
    </Root>
  );
  // find the 'fetchComments' button and click it
  wrapped.find(".fetch-comments").simulate("click");
  // Expect to find a list of commments
  expect(wrapped.find("li").length).toEqual(500); // (3) We have a problem with this assertion. It's returning 0 when it's expecting 500. Why is this happening?
});
