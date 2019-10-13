import axios from 'axios';
import { AUTH_USER, AUTH_ERROR } from './types';

export const signup = (formProps, callback) => async dispatch => {
	try {
		const response = await axios.post(
			'http://localhost:3090/signup',
			formProps
		);

		dispatch({ type: AUTH_USER, payload: response.data.token });
		// (1) Now we're facing the problem of our app losing its logged in state if we refresh the browser.
		// To overcome this issue we can rely on using the localStorage API, so that our Token can persist in the browser
		// We can set this localStorage key (token), just after we dispatch our signup action
		localStorage.setItem('token', response.data.token);
		callback();
	} catch (error) {
		dispatch({ type: AUTH_ERROR, payload: 'Email in use' });
	}
};
