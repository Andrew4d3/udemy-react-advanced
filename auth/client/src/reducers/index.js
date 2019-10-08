import { combineReducers } from 'redux';
// (1) Now it's time to start using redux-form, first we import the redux-form reducer into our root reducer
import { reducer as formReducer } from 'redux-form';
import auth from './auth';

export default combineReducers({
    auth,
    // (2) Don't forget to combine it
    form: formReducer
});