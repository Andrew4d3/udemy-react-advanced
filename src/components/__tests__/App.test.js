import React from "react";
import ReactDOM from "react-dom";
import App from "../App";

it("shows a comment box", () => {
  // Here we're creating a fake div to use in our test
  // We aren't using any web engine here, this only exists in memory
  const div = document.createElement("div");

  // Mounting the App component we want to test inside our fake div
  ReactDOM.render(<App />, div);

  // Looks inside the div
  // and checks to see if the CommentBox is in there
  expect(div.innerHTML).toContain("Comment Box");
  // Why is this expect statement wrong?: https://github.com/Andrew4d3/udemy-react-advanced/issues/5

  // Unmounting the App component we just mounted, (doing a "clean-up")
  ReactDOM.unmountComponentAtNode(div);
});
