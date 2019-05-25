import React from "react";
import { shallow } from "enzyme";
import App from "../App";
import CommentBox from "components/CommentBox"; // Now we can use absilute paths because we define a .env file that changes the default NODE_PATH
import CommentList from "components/CommentList";
let wrapped;

// In order to avoid repeating code, we can define a "beforeEach" call, which will execute before each of the "it" calls
beforeEach(() => {
  wrapped = shallow(<App />);
});

it("shows a comment box", () => {
  // We used the globally defined wrapped here
  expect(wrapped.find(CommentBox).length).toEqual(1);
});

it("shows a comment list", () => {
  // We are doing the same with the CommentList component
  expect(wrapped.find(CommentList).length).toEqual(1);
});
