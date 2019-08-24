import axios from "axios";
// (3) Let's import the new action type so that we can use it in our new action creator
import { SAVE_COMMENT, FETCH_COMMENTS, CHANGE_AUTH } from "actions/types";

export function saveComment(comment) {
  return {
    type: SAVE_COMMENT,
    payload: comment
  };
}

export function fetchComments() {
  const response = axios.get(
    "https://jsonplaceholder.typicode.com/posts/1/comments"
  );

  return {
    type: FETCH_COMMENTS,
    payload: response
  };
}

// (4) Let's define our new action creator which receives a boolean that indicates whether the user is logged in or not
export function changeAuth(isLoggedIn) {
  return {
    type: CHANGE_AUTH,
    payload: isLoggedIn
  };
}
