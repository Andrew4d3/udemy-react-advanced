// (1) Let's start writing our main reducers
import { combineReducers } from 'redux';
import auth from './auth';

// (4) Let's include the new auth reducer here, so that is available anywhere
export default combineReducers({
    auth
});