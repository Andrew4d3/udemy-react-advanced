import React from "react";
import { mount } from "enzyme";

import CommentList from "components/CommentList";
import Root from "Root"; // Our component uses Redux, so we need to import the Root component we defined before

let wrapped;

// (1) We need to mount the CommentList component before each of the tests and wrapp it around the Root component
beforeEach(() => {
  wrapped = mount(
    <Root>
      <CommentList />
    </Root>
  );
});

// (2) However, we have a problem here. Our initial state doesn't have any comments so we need to find way as to have comments inside there.
it("creates one LI per comment", () => {});
