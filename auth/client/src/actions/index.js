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

// (1) As we did with the Signin component, we're going to do the same thing for the action dispatcher.
// We're going to reuse the signup action code
export const signin = (formProps, callback) => async dispatch => {
	try {
		const response = await axios.post(
			'http://localhost:3090/signin',
			formProps
		);

		dispatch({ type: AUTH_USER, payload: response.data.token });
		localStorage.setItem('token', response.data.token);
		callback();
	} catch (error) {
		dispatch({
			type: AUTH_ERROR,
			payload: 'Password or Username is incorrect' // (2) We also want to change the message to one more appropriate with this functionality
		});
	}
};

export const signout = () => {
	localStorage.removeItem('token');

	return {
		type: AUTH_USER,
		payload: ''
	};
};
