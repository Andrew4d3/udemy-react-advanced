// (3) Now it's time to start tweaking our reducer, first lest import the action types
import { AUTH_USER } from '../actions/types';

const INITIAL_STATE = {
	authenticated: '',
	errorMessage: ''
};

// (4) And for last let's include the new reducer state, and return the new state
export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case AUTH_USER:
			return { ...state, authenticated: action.payload }; // Notice how we store the user's token inside a property called "authenticated"
		default:
			return state;
	}
};
