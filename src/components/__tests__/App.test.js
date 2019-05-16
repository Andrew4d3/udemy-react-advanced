import React from "react";
import { shallow } from "enzyme";
import App from "../App";
import CommentBox from "../CommentBox";

it("shows a comment box", () => {
  // With shallow we are rendering only the single component, not including its children.
  const wrapped = shallow(<App />);

  // Now we check if the wrapped component has an instance of CommentBox (we don't care the CommentBox content)
  expect(wrapped.find(CommentBox).length).toEqual(1);
});
