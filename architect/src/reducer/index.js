import { combineReducers } from 'redux';
import { NavigationActions } from 'react-navigation';
import * as nameRouter from '../router/listRouters';
import { RootNavigator } from '../router';

const firstAction = RootNavigator.router.getActionForPathAndParams(nameRouter.HomeScreen);
const tempNavState = RootNavigator.router.getStateForAction(firstAction);
const initialNavState = RootNavigator.router.getStateForAction(tempNavState);

const nav = (state = initialNavState, action) => {
    let nextState;

    switch (action.type) {
        case 'Login':
            nextState = RootNavigator.router.getStateForAction(NavigationActions.back(), state);
            break;
        case 'Logout':
            nextState = RootNavigator.router.getStateForAction(NavigationActions.navigate({ routeName: 'Login' }), state);
            break;
        default:
            nextState = RootNavigator.router.getStateForAction(action, state);
            break;
    }

    return nextState || state;
};

const initStateTest = {
    isLoading: false
};

const AppReducer = combineReducers({
    nav,
    initStateTest
});

export default AppReducer;
