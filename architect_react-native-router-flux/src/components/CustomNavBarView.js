import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, ViewPropTypes } from 'react-native';
import { Button } from 'native-base';
import { Actions } from 'react-native-router-flux';

const propTypes = {
    sceneStyle: ViewPropTypes.style
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
    render() {
        return (
            <View style={[styles.container, this.props.sceneStyle]}>
                <Button onPress={() => Actions.pop()}>
                    <Text>Back</Text>
                </Button>
                <Button onPress={() => Actions.replace('launch')}>
                    <Text>Welcome Page</Text>
                </Button>
                <Button
                    onPress={() => {
                        Actions.customNavBar1();
                    }}
                >
                    <Text>Switch to Scene with CustomNavBar #1</Text>
                </Button>
                <Button
                    onPress={() => {
                        Actions.customNavBar2();
                    }}
                >
                    <Text>Switch to Scene with CustomNavBar #2</Text>
                </Button>
                <Button
                    onPress={() => {
                        Actions.customNavBar3();
                    }}
                >
                    <Text>Switch to Scene with different CustomNavBar </Text>
                </Button>
                <Button
                    onPress={() => {
                        Actions.hiddenNavBar();
                    }}
                >
                    <Text>Switch to Scene with a navBar hidden</Text>
                </Button>
            </View>
        );
    }
}
TabView.propTypes = propTypes;

export default TabView;
