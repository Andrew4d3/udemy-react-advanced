import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import async from 'middlewares/async';
// (1) Now we need to wire up our recently created state validator. First, we import it
import stateValidator from 'middlewares/stateValidator';
import reducers from "reducers";

export default ({ children, initialState = {} }) => {
  const store = createStore(
    reducers,
    initialState,
    // (2) Then we have to include it inside of the applyMiddleware function.
    // We can either include it before or after the async middleware. It doesn't matter...
    // The async middleware will execute not matther how you define the rest of the middlewares
    applyMiddleware(async, stateValidator)
  );

  return <Provider store={store}>{children}</Provider>;
};
