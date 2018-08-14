import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, ViewPropTypes } from 'react-native';
import { Button } from 'native-base';
import { Actions } from 'react-native-router-flux';

const propTypes = {
    name: PropTypes.string.isRequired,
    data: PropTypes.string,
    sceneStyle: ViewPropTypes.style,
    title: PropTypes.string.isRequired
};

const defaultProps = {
    sceneStyle: null
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
        borderWidth: 2,
        borderColor: 'red'
    }
});

class TabView extends React.Component {
    state = { hideNavBar: false };

    toggleNavBar = () => {
        this.setState(prevState => ({ hideNavBar: !prevState.hideNavBar }), () => Actions.refresh({ hideNavBar: this.state.hideNavBar }));
    };

    render() {
        return (
            <View style={[styles.container, this.props.sceneStyle]}>
                <Text>
                    Tab title:
                    {this.props.title} name:
                    {this.props.name}
                </Text>
                <Text>Tab data: {this.props.data}</Text>
                {this.props.name === 'tab_1_1' && (
                    <Button onPress={() => Actions.tab_1_2()}>
                        <Text>next screen for tab1_1</Text>
                    </Button>
                )}
                {this.props.name === 'tab_2_1' && (
                    <Button onPress={() => Actions.tab_2_2()}>
                        <Text>next screen for tab2_1</Text>
                    </Button>
                )}
                <Button onPress={Actions.pop}>
                    <Text>Back</Text>
                </Button>
                <Button
                    onPress={() => {
                        Actions.tab_1();
                    }}
                >
                    <Text>Switch to tab1</Text>
                </Button>
                <Button
                    onPress={() => {
                        Actions.tab_2();
                    }}
                >
                    <Text>Switch to tab2</Text>
                </Button>
                <Button
                    onPress={() => {
                        Actions.tab_3();
                    }}
                >
                    <Text>Switch to tab3</Text>
                </Button>
                <Button
                    onPress={() => {
                        Actions.tab_4_1();
                    }}
                >
                    <Text>Switch to tab4</Text>
                </Button>
                <Button
                    onPress={() => {
                        Actions.tab_5_1({ data: 'test!' });
                    }}
                >
                    <Text>Switch to tab5 with data</Text>
                </Button>
                <Button
                    onPress={() => {
                        Actions.echo();
                    }}
                >
                    <Text>push clone scene (EchoView)</Text>
                </Button>
                <Button
                    onPress={() => {
                        this.toggleNavBar();
                    }}
                >
                    <Text>Toggle NavBar</Text>
                </Button>
            </View>
        );
    }
}
TabView.propTypes = propTypes;
TabView.defaultProps = defaultProps;

export default TabView;
