import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Text, Container, Card, CardItem, Body, Content } from 'native-base';

class Reddit extends PureComponent {
    render() {
        return (
            <Container>
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

export default Reddit;
