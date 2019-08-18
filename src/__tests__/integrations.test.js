import React from "react";
import { mount } from "enzyme";
import moxios from "moxios";
import Root from "Root";
import App from "components/App";
import { wrap } from "module";

beforeEach(() => {
  moxios.install();
  moxios.stubRequest("https://jsonplaceholder.typicode.com/posts/1/comments", {
    status: 200,
    response: [{ name: "Fetched #1" }, { name: "Fetched #2" }]
  });
});

afterEach(() => {
  moxios.uninstall();
});

// (1) The reason this test is still failing is because jest works in a synchronous way, and the moxios/axios call works asynchronously.
it("can fetch a list of comments and display them", done => {
  const wrapped = mount(
    <Root>
      <App />
    </Root>
  );

  wrapped.find(".fetch-comments").simulate("click");
  // (2) That's why we need to refactor the following instruction to make it work in a asynchronous fashion
  setTimeout(() => {
    // (3) Remember to update the component first!
    wrapped.update();
    expect(wrapped.find("li").length).toEqual(2);
    done();
    // (4) And don't forget to unmount the wrapped component too
    wrapped.unmount();
  }, 100);
});
