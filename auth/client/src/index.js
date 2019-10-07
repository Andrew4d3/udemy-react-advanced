import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";

import App from "./components/App";
import Welcome from "./components/Welcome";
// (3) Let's import our new Sign Up component into the main router
import Signup from './components/auth/Signup';

ReactDOM.render(
  <BrowserRouter>
    <App>
      <Route path="/" exact component={Welcome} />
      {/* (4) Remember we need to set a new rout for the new component */}
      <Route path="/signup" component={Signup} />
    </App>
  </BrowserRouter>,
  document.querySelector("#root")
);
