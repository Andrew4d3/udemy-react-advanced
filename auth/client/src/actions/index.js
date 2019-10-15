import axios from 'axios';
import { AUTH_USER, AUTH_ERROR } from './types';

export const signup = (formProps, callback) => async dispatch => {
	try {
		const response = await axios.post(
			'http://localhost:3090/signup',
			formProps
		);

		dispatch({ type: AUTH_USER, payload: response.data.token });
		localStorage.setItem('token', response.data.token);
		callback();
	} catch (error) {
		dispatch({ type: AUTH_ERROR, payload: 'Email in use' });
	}
};

// (4) We also have to set a new action.
// This action is quite simple, the only thing that does is to clear out the localStorage and reset the payload property on the redux state
export const sigout = () => {
	localStorage.clearItem('token');

	return {
		type: AUTH_USER,
		payload: ''
	};
};
