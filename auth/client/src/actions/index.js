import axios from 'axios';
import { AUTH_USER, AUTH_ERROR } from './types';

// (2) Remember to include the callback function as part of the action arguments
export const signup = (formProps, callback) => async dispatch => {
	try {
		const response = await axios.post(
			'http://localhost:3090/signup',
			formProps
		);

		dispatch({ type: AUTH_USER, payload: response.data.token });
		// (3) And call it after we dispatch the action to the reducer
		callback();
	} catch (error) {
		dispatch({ type: AUTH_ERROR, payload: 'Email in use' });
	}
};
