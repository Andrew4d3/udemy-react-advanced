// Let's first import the action name we're going to use for our action dispatcher
import { SAVE_COMMENT } from "actions/types";

// The action dispatcher will receive, as parameter, the comment we want to add to the comment list
export function saveComment(comment) {
  // It will dispatch an action with the type we already imported and the comment received as the payload
  return {
    type: SAVE_COMMENT,
    payload: comment
  };
}
