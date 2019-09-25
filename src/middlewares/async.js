export default ({ dispatch }) => (next) => (action) => {
    // (1) What we have to do...
    // Check to see if the action
    // has a promise on its 'payload' property
    // If it does, then wait for it to resolve
    // If it doesn't, then send the action to the
    // next middleware

    // (2) We neeed to check whether the action has a promise or not. If it doesn't, we forward it
    if (!action.payload || !action.payload.then) {
        return next(action);
    }
};