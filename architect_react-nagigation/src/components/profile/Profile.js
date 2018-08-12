import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Alert } from 'react-native';

import { Text, Container, Card, CardItem, Body, Content, Header, Right, Icon, Title, Button } from 'native-base';

import { EditScreenOne } from './listRouters';
import MenuHamburger from '../menuHamburger';

class Profile extends PureComponent {
    componentDidMount() {
        const { navigation } = this.props;

        if (navigation.state.params !== undefined) {
            Alert.alert('USER found', navigation.state.params);
        }
    }

    render() {
        const { navigation } = this.props;

        return (
            <Container>
                <Content padder>
                    <Card>
                        <CardItem>
                            <Icon active name="paper-plane" />
                            <Text>Show User profiles here</Text>
                            <Right>
                                <Icon name="close" />
                            </Right>
                        </CardItem>
                    </Card>
                    <Button full rounded primary style={{ marginTop: 10 }} onPress={() => navigation.navigate(EditScreenOne)}>
                        <Text>Goto EditScreen One</Text>
                    </Button>
                </Content>
            </Container>
        );
    }
}

Profile.navigationOptions = ({ navigation }) => {
    return {
        header: (
            <Header>
                <MenuHamburger navigation={navigation} />
                <Body>
                    <Title>Profile</Title>
                </Body>
                <Right />
            </Header>
        )
    };
};

Profile.propTypes = {
    navigation: PropTypes.object.isRequired
};

export default Profile;
