import React from 'react';
import { Text, Container, Card, CardItem, Body, Content, Header, Left, Right, Icon, Title, Button } from 'native-base';

class EditScreenTwo extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        header: (
            <Header>
                <Left>
                    <Button transparent onPress={() => navigation.goBack()}>
                        <Icon name="arrow-back" />
                    </Button>
                </Left>
                <Body>
                    <Title>EditScreenTwo</Title>
                </Body>
                <Right />
            </Header>
        )
    });

    render() {
        return (
            <Container>
                <Content padder>
                    <Card>
                        <CardItem>
                            <Icon active name="paper-plane" />
                            <Text>Edit Screen 2</Text>
                            <Right>
                                <Icon name="close" />
                            </Right>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        );
    }
}

export default EditScreenTwo;
