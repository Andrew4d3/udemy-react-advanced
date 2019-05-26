import React from "react";
import { mount } from "enzyme";
import CommentBox from "components/CommentBox";
let wrapped;

beforeEach(() => {
  // As I mentioned, we are testing the full DOM, we need to use "mount" for that
  wrapped = mount(<CommentBox />);
});

// Since we're using a full DOM testim, it's neccessary to do a "clean-up" after each test runs
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
