import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Button, Text, Container, Card, CardItem, Body, Content } from 'native-base';
import { Actions } from 'react-native-router-flux';

class Home extends PureComponent {
    render() {
        const { openControlPanel } = this.props;

        return (
            <Container>
                <Content padder>
                    <Card>
                        <CardItem>
                            <Body>
                                <Text>Chat App to talk some awesome people!</Text>
                            </Body>
                        </CardItem>
                    </Card>
                    <Button full rounded dark style={{ marginTop: 10 }} onPress={() => openControlPanel()}>
                        <Text>Chat With People</Text>
                    </Button>
                    <Button full rounded primary style={{ marginTop: 10 }} onPress={() => Actions.redditScreen()}>
                        <Text>Goto Reddit</Text>
                    </Button>
                </Content>
            </Container>
        );
    }
}

Home.propTypes = {
    openControlPanel: PropTypes.func.isRequired
};

export default Home;
