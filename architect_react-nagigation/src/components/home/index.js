import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Button, Text, Container, Card, CardItem, Body, Content, Header, Title, Right } from 'native-base';

import { ChatScreen, ProfileScreen } from '../../router/listRouters';
import MenuHamburger from '../menuHamburger';

class Home extends PureComponent {
    render() {
        const { navigation } = this.props;

        return (
            <Container>
                <Header>
                    <MenuHamburger navigation={navigation} />
                    <Body>
                        <Title>HomeScreen</Title>
                    </Body>
                    <Right />
                </Header>
                <Content padder>
                    <Card>
                        <CardItem>
                            <Body>
                                <Text>Chat App to talk some awesome people!</Text>
                            </Body>
                        </CardItem>
                    </Card>
                    <Button full rounded dark style={{ marginTop: 10 }} onPress={() => navigation.navigate(ChatScreen)}>
                        <Text>Chat With People</Text>
                    </Button>
                    <Button full rounded primary style={{ marginTop: 10 }} onPress={() => navigation.navigate(ProfileScreen)}>
                        <Text>Goto Profiles</Text>
                    </Button>
                </Content>
            </Container>
        );
    }
}

Home.propTypes = {
    navigation: PropTypes.object.isRequired
};

export default Home;
