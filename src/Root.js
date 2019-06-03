/*
    (1) So in order to have our test back in green, we need to set create a "reusable" component
    that we can either import in the index.js file or our test files
    We would calle it a "Root" component
*/

// (2) Here're we are doing the same we did in the index.js file
import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "reducers";

export default props => {
  // (3) We will wrapp any children around the provider
  return (
    <Provider store={createStore(reducers, {})}>{props.children}</Provider>
  );
};
