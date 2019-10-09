// (1) Now it's time to make our first API call. We're going to use axios for that
import axios from 'axios';
import { AUTH_USER } from './types';

export const signup = (formProps) => (dispatch) => {
    // (2) In this case, The form props and the payload that our endpoint is expecting to receive is exactly the same, so we just pass it out
    axios.post('http://localhost:3090/singup', formProps);
}