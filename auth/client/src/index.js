import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
// (1) Now it's time to integrate redux-thunk which we're going to use to handle async calls. First lest import the applyMiddleware function from redux
import { createStore, applyMiddleware } from "redux";
// (2) And let's import redux-thunk
import reduxThunk from "redux-thunk";

import App from "./components/App";
import Welcome from "./components/Welcome";
import Signup from "./components/auth/Signup";
import reducers from "./reducers";

// (3) Let's re-write our createStore implementation so that we have more space
const store = createStore(
  reducers,
  {},
  // (4) Here we include our redux-thunk middleware
  applyMiddleware(reduxThunk)
);

ReactDOM.render(
  // (5) Now we just have to pass the store constant we defined above
  <Provider store={store}>
    <BrowserRouter>
      <App>
        <Route path="/" exact component={Welcome} />
        <Route path="/signup" component={Signup} />
      </App>
    </BrowserRouter>
  </Provider>,
  document.querySelector("#root")
);
