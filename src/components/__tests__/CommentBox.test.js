import React from "react";
import { mount } from "enzyme";
import CommentBox from "components/CommentBox";
let wrapped;

beforeEach(() => {
  // As I mentioned, we are testing the full DOM, we need to use "mount" for that
  wrapped = mount(<CommentBox />);
});

// Since we're using a full DOM testing, it's neccessary to do a "clean-up" after each test runs
// We only have to use the "unmount" method
afterEach(() => {
  wrapped.unmount();
});

it("shows a comment box", () => {
  // With "find", we cannot only find component instances but HTML components as well.
  // So we can verify the existence of the following HTML components: (textarea, button)
  expect(wrapped.find("textarea").length).toEqual(1);
  expect(wrapped.find("button").length).toEqual(1);
});

it("has a text area that users can type in", () => {
  // For this text, we need to simulate a "change" event.
  // So we use the "simulate" enzyme method, where we can pass a mocked event object as parameter
  wrapped.find("textarea").simulate("change", {
    target: { value: "new comment" }
  });

  // As you may know, A component's update in react happens asynchronously.
  // That's why we need to "force" an update to take place in order to make our assertions
  // For that, we use the "update" enzyme method

  wrapped.update();

  // Now that our component is updated, we need to verify that the textarea's value actually changed...
  // For that, we use the "prop" enzyme method, where we can verify the value of any component property
  // In our case, the prop's name is "value"

  expect(wrapped.find("textarea").prop("value")).toEqual("new comment");
});

// Exercise code with fixes
it("clears the textarea after the comment gets submmited", () => {
  wrapped.find("textarea").simulate("change", {
    target: { value: "new comment" }
  });

  wrapped.update();

  wrapped.find("textarea").simulate("submit", {
    preventDefault: () => {}
  });

  wrapped.update();

  expect(wrapped.find("textarea").prop("value")).toEqual("");
});
