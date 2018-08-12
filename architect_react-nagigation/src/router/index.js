import React from 'react';
import { createDrawerNavigator } from 'react-navigation';
import { connect } from 'react-redux';
import { reduxifyNavigator, createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers';

import SideBarComponent from '../components/sidebar';
import { listRouterScreen } from './listRouters';

let listRouters = {};
listRouterScreen.length > 0 &&
    listRouterScreen.map(item => {
        listRouters[item.screen] = {
            screen: item.component
        };
    });

const RootNavigator = createDrawerNavigator(listRouters, {
    contentComponent: props => <SideBarComponent {...props} />
});

const middleware = createReactNavigationReduxMiddleware('root', state => state.nav);

const mapStateToProps = state => ({
    state: state.nav
});
const AppWithNavigationState = reduxifyNavigator(RootNavigator, 'root');

const AppNavigator = connect(mapStateToProps)(AppWithNavigationState);

export { RootNavigator, AppNavigator, middleware };
