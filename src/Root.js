import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux"; // (1) Let's import applyMiddleware so that we can integrate the redux-promise middleware
import async from 'middlewares/async';
import reducers from "reducers";

export default ({ children, initialState = {} }) => {
  // (2) Let's define the store as a constant
  const store = createStore(
    reducers,
    initialState,
    applyMiddleware(async) // (3) As third parameter, we pass the reduxPromise middleware, we apply it using the helper function we importerd before
  );

  return <Provider store={store}>{children}</Provider>;
};
