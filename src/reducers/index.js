import { combineReducers } from "redux";
import commentsReducer from "reducers/comments";

// Here we're combining all the current reducers (it's only one, but we might have more)
// into one single global reducer

export default combineReducers({
  comments: commentsReducer
});
