import { AUTH_USER } from './types';

// (2) Now let's define our first action dispatcher (signup)
export const signup = ({ email, password }) => (dispatch) => { // (3) Since we're using redux-thunk, we can return a function instead of the typical type-payload object
    // (4) The redux thunk returned function receives as argument a dispatch function, where we can use to return action objects as much as we want
}