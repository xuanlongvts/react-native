import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { NavigationActions } from 'react-navigation';
import { Button, Text, Container, Body, Content, Header, Left, Right, Icon, Title, Input, Item, Label } from 'native-base';

import { DrawerOpen, ProfileScreen } from '../../router/listRouters';

class NineChat extends PureComponent {
    render() {
        const { navigation } = this.props;

        return (
            <Container>
                <Header>
                    <Left>
                        <Button transparent onPress={() => navigation.openDrawer(DrawerOpen)}>
                            <Icon name="menu" />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Nine Chat</Title>
                    </Body>
                    <Right />
                </Header>
                <Content padder>
                    <Item floatingLabel style={{ marginTop: 20 }}>
                        <Label>Nine Chat</Label>
                        <Input />
                    </Item>
                    <Button
                        rounded
                        info
                        style={{ marginTop: 20, alignSelf: 'center' }}
                        onPress={() => {
                            const navigationAction = NavigationActions.navigate({
                                routeName: ProfileScreen,
                                params: { name: 'Nine' }
                            });
                            navigation.dispatch(navigationAction);
                        }}
                    >
                        <Text>Goto Nine Profile</Text>
                    </Button>
                </Content>
            </Container>
        );
    }
}

NineChat.propTypes = {
    navigation: PropTypes.object.isRequired
};

export default NineChat;
