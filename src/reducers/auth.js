import { CHANGE_AUTH } from "../actions/types";

// (1) We're going to start implementing the Authentication feature for our app. First let's start by implementing the corresponding reducer

export default function(state = false, action) {
  switch (action.type) {
    // (5) Let's add the new reducer case for our new action type
    case CHANGE_AUTH:
      return action.payload;
    default:
      return state;
  }
}
