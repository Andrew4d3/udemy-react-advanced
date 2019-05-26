import React from "react";
import { mount } from "enzyme";
import CommentBox from "components/CommentBox";

it("shows a comment box", () => {
  // As I mentioned, we are testing the full DOM, we need to use "mount" for that
  const wrapped = mount(<CommentBox />);

  // With "find", we cannot only find component instances but HTML components as well.
  // So we can verify the existence of the following HTML components: (textarea, button)
  expect(wrapped.find("textarea").length).toEqual(1);
  expect(wrapped.find("button").length).toEqual(1);
});
