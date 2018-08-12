import React, { PureComponent } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Root, Spinner } from 'native-base';
import { Font } from 'expo';

import AppReducer from './src/reducer';
import { AppNavigator, middleware } from './src/router';

const store = createStore(AppReducer, applyMiddleware(middleware));

export default class App extends PureComponent {
    constructor(props) {
        super(props);
        this.state = { loading: true };
    }

    async componentDidMount() {
        await Font.loadAsync({
            Roboto: require('native-base/Fonts/Roboto.ttf'),
            Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf')
        });
        this.setState({ loading: false });
    }

    render() {
        const { loading } = this.state;

        if (loading) {
            return (
                <Root>
                    <Spinner color="green" />
                </Root>
            );
        }

        return (
            <Provider store={store}>
                <AppNavigator />
            </Provider>
        );
    }
}
