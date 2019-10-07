import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from "./components/App";
import Welcome from "./components/Welcome";
import Signup from './components/auth/Signup';
import reducers from './reducers';

// (5) Finally, we wire up our reducers using the Provider tag and the createStore method
ReactDOM.render(
  <Provider store={createStore(reducers, {})}>
    <BrowserRouter>
      <App>
        <Route path="/" exact component={Welcome} />
        <Route path="/signup" component={Signup} />
      </App>
    </BrowserRouter>
  </Provider>,
  document.querySelector("#root")
);
