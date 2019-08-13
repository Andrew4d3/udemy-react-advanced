import React from "react";
import { mount } from "enzyme";

import CommentList from "components/CommentList";
import Root from "Root"; // Our component uses Redux, so we need to import the Root component we defined before

let wrapped;

beforeEach(() => {
  // (1) Let's define some mock comments here:
  const initialState = {
    comments: ["Comment 1", "Comment 2"]
  };
  // (2) And pass them out as the Root props
  wrapped = mount(
    <Root initialState={initialState}>
      <CommentList />
    </Root>
  );
});

it("creates one LI per comment", () => {
  // (5) For now, we're just going to log the length of the li elements. We should get a 2 as length
  console.log(wrapped.find("li").length);
});
