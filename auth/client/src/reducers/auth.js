import { AUTH_USER, AUTH_ERROR } from '../actions/types';

const INITIAL_STATE = {
	authenticated: '',
	errorMessage: ''
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case AUTH_USER:
			return { ...state, authenticated: action.payload };
		// (4) We also have to add the new reducer case, so that we can store the error message inside the redux state
		case AUTH_ERROR:
			return { ...state, errorMessage: action.payload };
		default:
			return state;
	}
};
