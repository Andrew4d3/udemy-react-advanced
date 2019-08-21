import React from "react";
import ReactDOM from "react-dom";
// (1) Install and import the react-router-dom dependency. We need to import these two methods
import { BrowserRouter, Route } from "react-router-dom";
import Root from "Root";

import App from "./components/App";

// (2) Now we need to include the main App as a router route
ReactDOM.render(
  <Root>
    <BrowserRouter>
      <Route path="/" component={App} />
    </BrowserRouter>
  </Root>,
  document.querySelector("#root")
);

// Check the comments to see the mockups of the app we'll be building.
