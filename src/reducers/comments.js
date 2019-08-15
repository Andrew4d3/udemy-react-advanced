// (2) Including the FETCH_COMMENTS type
import { SAVE_COMMENT, FETCH_COMMENTS } from "actions/types";

export default function(state = [], action) {
  switch (action.type) {
    case SAVE_COMMENT:
      return [...state, action.payload];
    case FETCH_COMMENTS:
      // (3) Mapping through the response to get only the comment strings
      const comments = action.payload.data.map(comment => comment.name);
      // (4) Building the new state.
      return [...state, ...comments];
    default:
      return state;
  }
}
