import axios from 'axios';
// (4) Now we can import it here
import { AUTH_USER, AUTH_ERROR } from './types';

export const signup = formProps => async dispatch => {
	// (1) Now we need to handle possible API errors in our fronted, first let's wrap our action code around a try-catch statement
	try {
		const response = await axios.post(
			'http://localhost:3090/signup',
			formProps
		);

		dispatch({ type: AUTH_USER, payload: response.data.token });
	} catch (error) {
		// (2) If get an error from our API, we're going to dispatch a different action called: "AUTH_ERROR"
		dispatch({ type: AUTH_ERROR, payload: 'Email in use' });
	}
};
