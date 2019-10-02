// (2) Second thing we want to do is to import the tv4 dependency and the module that contains the state schema
import tv4 from 'tv4';
import stateSchema from './stateSchema';

export default ({ dispatch, getState }) => next => action => {
    // (1) The first thing we want to do is to call next function. Because we want to validate the state after it went through the reducer.
    next(action);
    // (3) Using the tv4 API we're going to validate the current state using the state schema we previously imported
    console.log(tv4.validate(getState(), stateSchema));
};
