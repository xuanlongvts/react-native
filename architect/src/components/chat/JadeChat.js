import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { NavigationActions } from 'react-navigation';
import { Button, Text, Container, Body, Content, Header, Left, Right, Icon, Title, Input, Label, Item } from 'native-base';

import { DrawerOpen, ProfileScreen } from '../../router/listRouters';

class JadeChat extends PureComponent {
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
                        <Title>Jade Chat</Title>
                    </Body>
                    <Right />
                </Header>
                <Content padder>
                    <Item floatingLabel style={{ marginTop: 20 }}>
                        <Label>Jade Chat</Label>
                        <Input />
                    </Item>
                    <Button
                        rounded
                        success
                        style={{ marginTop: 20, alignSelf: 'center' }}
                        onPress={() => {
                            const navigationAction = NavigationActions.navigate({
                                routeName: ProfileScreen, // <==== this is Profile tabNavigator
                                action: NavigationActions.navigate({
                                    routeName: ProfileScreen, // <===== this is defaultScreen for Porfile
                                    params: { name: 'Jade' }
                                })
                            });
                            navigation.dispatch(navigationAction);
                        }}
                    >
                        <Text>Goto Jade Profile</Text>
                    </Button>
                </Content>
            </Container>
        );
    }
}

JadeChat.propTypes = {
    navigation: PropTypes.object.isRequired
};

export default JadeChat;
