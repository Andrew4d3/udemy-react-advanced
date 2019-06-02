// Importing the action type names from the corresponding file
import { SAVE_COMMENT } from "actions/types";

// Here we're defining the comments reducers
export default function(state = [], action) {
  switch (action.type) {
    // Now if we get a "SAVE_COMMENT" action we're going to generate a new state
    // This new state will be our current comment's array + the new comment
    case SAVE_COMMENT:
      return [...state, action.payload];
    default:
      return state;
  }
}
