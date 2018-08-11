import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Button, Text, Container, Card, CardItem, Body, Content, Header, Title, Left, Icon, Right } from 'native-base';

import { DrawerOpen } from '../../router/listRouters';

class Reddit extends PureComponent {
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
                        <Title>HomeScreen</Title>
                    </Body>
                    <Right />
                </Header>
                <Content padder>
                    <Card>
                        <CardItem>
                            <Body>
                                <Text>reactjs</Text>
                            </Body>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        );
    }
}

Reddit.propTypes = {
    navigation: PropTypes.object.isRequired
};

export default Reddit;
