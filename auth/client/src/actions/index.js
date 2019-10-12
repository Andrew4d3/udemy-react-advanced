import axios from 'axios';
import { AUTH_USER } from './types';

// (1) First let's change the signup action to be an async function so that we can use await
export const signup = formProps => async dispatch => {
	const response = await axios.post('http://localhost:3090/signup', formProps); // Now we can store the response inside a constant like this

	// (2) Second, let's dispatch the action "AUTH_USER" so that our reducer can take the user's token
	dispatch({ type: AUTH_USER, payload: response.data.token });
};
