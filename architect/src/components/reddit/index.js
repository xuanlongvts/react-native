import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Text, Container, Card, CardItem, Body, Content, Header, Title, Right } from 'native-base';

import MenuHamburger from '../menuHamburger';

class Reddit extends PureComponent {
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
