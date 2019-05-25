import React from "react";
import { shallow } from "enzyme";
import App from "../App";
import CommentBox from "components/CommentBox"; // Now we can use absilute paths because we define a .env file that changes the default NODE_PATH
import CommentList from "components/CommentList";

it("shows a comment box", () => {
  // With shallow we are rendering only the single component, not including its children.
  const wrapped = shallow(<App />);

  // Now we check if the wrapped component has an instance of CommentBox (we don't care the CommentBox content)
  expect(wrapped.find(CommentBox).length).toEqual(1);
});

it("shows a comment list", () => {
  // We are doing the same with the CommentList component
  const wrapped = shallow(<App />);
  expect(wrapped.find(CommentList).length).toEqual(1);
});
