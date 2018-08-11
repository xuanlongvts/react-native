import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Text, Container, Card, CardItem, Body, Content, Header, Left, Right, Icon, Title, Button } from 'native-base';

import { EditScreenTwo } from './listRouters';

class EditScreenOne extends PureComponent {
    static navigationOptions = ({ navigation }) => ({
        header: (
            <Header>
                <Left>
                    <Button transparent onPress={() => navigation.goBack()}>
                        <Icon name="arrow-back" />
                    </Button>
                </Left>
                <Body>
                    <Title>EditScreenOne</Title>
                </Body>
                <Right />
            </Header>
        )
    });

    render() {
        const { navigation } = this.props;

        return (
            <Container>
                <Content padder>
                    <Card>
                        <CardItem>
                            <Icon active name="paper-plane" />
                            <Text>Edit Screen 1</Text>
                            <Right>
                                <Icon name="close" />
                            </Right>
                        </CardItem>
                    </Card>
                    <Button full rounded primary style={{ marginTop: 10 }} onPress={() => navigation.navigate(EditScreenTwo)}>
                        <Text>Goto EditScreenTwo</Text>
                    </Button>
                </Content>
            </Container>
        );
    }
}

EditScreenOne.propTypes = {
    navigation: PropTypes.object.isRequired
};

export default EditScreenOne;
