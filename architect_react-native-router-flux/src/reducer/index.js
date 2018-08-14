import { combineReducers } from 'redux';

const initStateTest = () => {
    return {
        isLoading: false
    };
};

const rootReducer = combineReducers({
    initStateTest
});

export default rootReducer;
