import tv4 from 'tv4';
import stateSchema from './stateSchema';

export default ({ dispatch, getState }) => next => action => {
    next(action);
    // (3) Logging the state is not enough. Let's display a warning that will apear when the state is invalid
    if (!tv4.validate(getState(), stateSchema)) {
        console.warn('Invalid state schema detected');
    };
};
