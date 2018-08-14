import React, { PureComponent } from 'react';
import { Image } from 'react-native';
import PropTypes from 'prop-types';
import { Text, Container, List, ListItem, Content } from 'native-base';
import { Actions } from 'react-native-router-flux';

import { ListRouters } from '../../RoutersAuthen';

class SideBar extends PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        const { closeControlPanel } = this.props;

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
                        dataArray={ListRouters}
                        contentContainerStyle={{ marginTop: 120 }}
                        renderRow={data => {
                            return (
                                <ListItem
                                    button
                                    onPress={() => {
                                        closeControlPanel();
                                        Actions.redditScreen();
                                    }}
                                >
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
    closeControlPanel: PropTypes.func.isRequired
};

export default SideBar;
