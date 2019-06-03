import React from "react";
import ReactDOM from "react-dom";
// (4) We get rid off all the imports we had before. Since now we'll be using our new Root component
import Root from "Root";

import App from "./components/App";

// (5) And we wrapp our App componet around the Root component
ReactDOM.render(
  <Root>
    <App />
  </Root>,
  document.querySelector("#root")
);
