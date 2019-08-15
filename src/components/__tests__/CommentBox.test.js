import React from "react";
import { mount } from "enzyme";
import CommentBox from "components/CommentBox";
import Root from "Root";

let wrapped;

beforeEach(() => {
  wrapped = mount(
    <Root>
      <CommentBox />
    </Root>
  );
});

afterEach(() => {
  wrapped.unmount();
});

// (1) We have this test case failing, it's expecting to have one button but we added a second one few moments ago
it("shows a comment box", () => {
  expect(wrapped.find("textarea").length).toEqual(1);
  expect(wrapped.find("button").length).toEqual(2); // Now it expects 2!
});

describe("The text area", () => {
  beforeEach(() => {
    wrapped.find("textarea").simulate("change", {
      target: { value: "new comment" }
    });

    wrapped.update();
  });

  it("has a text area that users can type in", () => {
    expect(wrapped.find("textarea").prop("value")).toEqual("new comment");
  });

  it("clears the textarea after the comment gets submmited", () => {
    wrapped.find("textarea").simulate("submit", {
      preventDefault: () => {}
    });

    wrapped.update();

    expect(wrapped.find("textarea").prop("value")).toEqual("");
  });
});
