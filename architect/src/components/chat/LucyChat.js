import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { NavigationActions } from 'react-navigation';
import { Button, Text, Container, Body, Content, Header, Right, Title, Input, Item, Label } from 'native-base';

import { ProfileScreen } from '../../router/listRouters';
import MenuHamburger from '../menuHamburger';

class LucyChat extends PureComponent {
    render() {
        const { navigation } = this.props;

        return (
            <Container>
                <Header>
                    <MenuHamburger navigation={navigation} />
                    <Body>
                        <Title>Lucy Chat</Title>
                    </Body>
                    <Right>
                        <Title>Right</Title>
                    </Right>
                </Header>
                <Content padder>
                    <Item floatingLabel style={{ marginTop: 20 }}>
                        <Label>Lucy Chat</Label>
                        <Input />
                    </Item>
                    <Button
                        rounded
                        danger
                        style={{ marginTop: 20, alignSelf: 'center' }}
                        onPress={() => {
                            const navigationAction = NavigationActions.navigate({
                                routeName: ProfileScreen,
                                params: { name: 'Lucy' }
                            });
                            navigation.dispatch(navigationAction);
                        }}
                    >
                        <Text>Goto Lucy Profile</Text>
                    </Button>
                </Content>
            </Container>
        );
    }
}

LucyChat.propTypes = {
    navigation: PropTypes.object.isRequired
};

export default LucyChat;
