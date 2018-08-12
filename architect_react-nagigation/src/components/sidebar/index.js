import React from 'react';
import { Image } from 'react-native';
import PropTypes from 'prop-types';
import { Text, Container, List, ListItem, Content } from 'native-base';

import * as nameRouter from '../../router/listRouters';

class SideBar extends React.Component {
    render() {
        const { navigation } = this.props;

        return (
            <Container>
                <Content>
                    <Image
                        source={{
                            uri: 'https://raw.githubusercontent.com/GeekyAnts/NativeBase-KitchenSink/master/assets/drawer-cover.png'
                        }}
                        style={{
                            height: 120,
                            width: '100%',
                            alignSelf: 'stretch',
                            position: 'absolute'
                        }}
                    />
                    <Image
                        square
                        style={{
                            height: 80,
                            width: 70,
                            position: 'absolute',
                            alignSelf: 'center',
                            top: 20
                        }}
                        source={{
                            uri: 'https://raw.githubusercontent.com/GeekyAnts/NativeBase-KitchenSink/master/assets/logo.png'
                        }}
                    />
                    <List
                        dataArray={nameRouter.listRouterScreen}
                        contentContainerStyle={{ marginTop: 120 }}
                        renderRow={data => {
                            return (
                                <ListItem button onPress={() => navigation.navigate(data.screen)}>
                                    <Text>{data.title}</Text>
                                </ListItem>
                            );
                        }}
                    />
                </Content>
            </Container>
        );
    }
}

SideBar.propTypes = {
    navigation: PropTypes.object.isRequired
};

export default SideBar;
