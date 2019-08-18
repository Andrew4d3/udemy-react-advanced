import React from "react";
import { mount } from "enzyme";
import moxios from "moxios";
import Root from "Root";
import App from "components/App";

// (1) Here, we're going to integrate moxios in order to mock our HTTP requests handled by axios
beforeEach(() => {
  moxios.install();
  moxios.stubRequest("https://jsonplaceholder.typicode.com/posts/1/comments", {
    // (2) Here we're defining the mocked response
    status: 200,
    response: [{ name: "Fetched #1" }, { name: "Fetched #1" }]
  });
});

afterEach(() => {
  moxios.uninstall(); // (3) And here we're disabling the moxios stub so that we avoid accidentally calling moxios for other unintended tests
});

it("can fetch a list of comments and display them", () => {
  // Attenpt to render the entire app
  const wrapped = mount(
    <Root>
      <App />
    </Root>
  );
  // find the 'fetchComments' button and click it
  wrapped.find(".fetch-comments").simulate("click");
  // Expect to find a list of commments
  expect(wrapped.find("li").length).toEqual(500);
});
