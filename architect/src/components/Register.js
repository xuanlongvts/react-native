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

const Register = () => (
    <View style={styles.container}>
        <Text>Register page</Text>
        <Button onPress={() => Actions.register2()}>
            <Text>Register</Text>
        </Button>
        <Button onPress={() => Actions.home()}>
            <Text>Replace screen</Text>
        </Button>
        <Button onPress={() => Actions.pop()}>
            <Text>Back</Text>
        </Button>
    </View>
);

export default Register;
