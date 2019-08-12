import commentsReducer from "reducers/comments"; // We need to import the reducer we want to test
import { SAVE_COMMENT } from "actions/types";

// We're going to test if actions of type "SAVE COMMENT" works OK
it("handles action of type SAVE_COMMENT", () => {
  const action = {
    type: SAVE_COMMENT,
    payload: "New Comment"
  }; // This is a "fake" payload we are creating to test our reducer

  const newState = commentsReducer([], action); // Passing our fake action and a fake initial step

  expect(newState).toEqual(["New Comment"]); // And here we verify if the new state contains the comment we included in our fake action payload00
});

// Tests are passing, our reducer works OK
