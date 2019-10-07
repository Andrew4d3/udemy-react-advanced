// (2) Here we're defining our authentication reducer
const INITIAL_STATE = {
    authenticated: '',
    errorMessage: ''
};

export default (state = INITIAL_STATE, action) => {
    // (3) For now the only thing that is going to do is to return the state as it's recieved
    return state;
};