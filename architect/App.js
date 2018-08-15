import React, { PureComponent } from 'react';
import { Provider } from 'react-redux';
import { Spinner, Container, Content } from 'native-base';
import { Font } from 'expo';

import store from './src/store';
import Routes from './src/router';

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
                <Container>
                    <Content padder>
                        <Spinner color="green" />
                    </Content>
                </Container>
            );
        }

        return (
            <Provider store={store}>
                <Routes />
            </Provider>
        );
    }
}
