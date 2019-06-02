import React from "react";
import ReactDOM from "react-dom";
// Now it's time to connect the redux setup with our react app.
// For this, first we need to import the corresponding dependencies
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "reducers";

import App from "./components/App";

// Now we have to wrap our main app with the Provider component from react redux
// We set the corresponding store props using the createStore method from redux,
// which will take as argument the main reducer we defined before and a initial state (empty object)
ReactDOM.render(
  <Provider store={createStore(reducers, {})}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
