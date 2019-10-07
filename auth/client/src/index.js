import React from "react";
import ReactDOM from "react-dom";
// (1) Let's import the BrowserRouter component from react-router-dom so that we can't get rid of such error
import { BrowserRouter, Route } from "react-router-dom";

import App from "./components/App";
// (4) We need to find a way to include this new component as part of a route/path
import Welcome from "./components/Welcome";

// (2) Now the only thing we need to do is wrap it around our App component
ReactDOM.render(
  // (5) Let's extend the App component so that we can manipulate its children
  <BrowserRouter>
    <App>
      <Route path="/" exact component={Welcome} />
    </App>
  </BrowserRouter>,
  document.querySelector("#root")
);
