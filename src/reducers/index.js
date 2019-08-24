import { combineReducers } from "redux";
import commentsReducer from "reducers/comments";
import authReducer from "reducers/auth";

// (1) Let's include the new reducer into our global reducer state
export default combineReducers({
  comments: commentsReducer,
  auth: authReducer
});
