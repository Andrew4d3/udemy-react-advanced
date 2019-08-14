import axios from "axios";
import { SAVE_COMMENT, FETCH_COMMENTS } from "actions/types";

export function saveComment(comment) {
  return {
    type: SAVE_COMMENT,
    payload: comment
  };
}

// (5) Let's define the action creator which will make the API call
export function fetchComments() {
  // (6) Here we send the axios request to the mock server in order to retrieve the comments
  const response = axios.get(
    "https://jsonplaceholder.typicode.com/posts/1/comments"
  );

  // (7) And we return the action object, as payload we send the promise from the axios request
  return {
    type: FETCH_COMMENTS,
    payload: response
  };
}
