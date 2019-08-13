import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "reducers";

// (3) Let's do some destructuring so that we can define an empy object as default initial state
export default ({ children, initialState = {} }) => {
  // (4) Now, instead of passing an empty object as initial state, we passed the one from the props
  return (
    <Provider store={createStore(reducers, initialState)}>{children}</Provider>
  );
};
