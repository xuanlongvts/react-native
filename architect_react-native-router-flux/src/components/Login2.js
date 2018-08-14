import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'native-base';
import { Actions } from 'react-native-router-flux';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    }
});

export default class extends React.Component {
    render() {
        const title = this.props.title || 'No Title';
        const data = this.props.data || 'No Data';
        return (
            <View style={styles.container}>
                <Text>Login page 2</Text>
                <Text>Title: {title}</Text>
                <Text>Data: {data}</Text>
                <Button
                    onPress={() => {
                        Actions.pop({ refresh: { data: 'Data after pop', title: 'title after pop' } });
                    }}
                >
                    <Text>Back and refresh</Text>
                </Button>
                <Button onPress={() => Actions.loginModal3({ data: 'Custom data3', title: 'Custom title3' })}>
                    <Text>Login 3</Text>
                </Button>
            </View>
        );
    }
}
