import { combineReducers } from 'redux';

import reducerRedditApi from '../components/reddit/reducer';

const initStateTest = () => {
    return {
        isLoading: false
    };
};

const rootReducer = combineReducers({
    initStateTest,
    reducerRedditApi
});

export default rootReducer;
