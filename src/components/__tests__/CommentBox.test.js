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

// Use describe statements to group tests together
describe("The text area", () => {
  beforeEach(() => {
    // This beforeEach will only execute inside this "describe" statement
    wrapped.find("textarea").simulate("change", {
      target: { value: "new comment" }
    });

    wrapped.update();
  });

  it("has a text area that users can type in", () => {
    // Now that our component is updated, we need to verify that the textarea's value actually changed...
    // For that, we use the "prop" enzyme method, where we can verify the value of any component property
    // In our case, the prop's name is "value"

    expect(wrapped.find("textarea").prop("value")).toEqual("new comment");
  });

  // Exercise code with fixes
  it("clears the textarea after the comment gets submmited", () => {
    wrapped.find("textarea").simulate("submit", {
      preventDefault: () => {}
    });

    wrapped.update();

    expect(wrapped.find("textarea").prop("value")).toEqual("");
  });
});
