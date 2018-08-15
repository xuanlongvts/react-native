import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Body, Header, Title, Right, Button, Left, Icon } from 'native-base';

class HeaderComponent extends PureComponent {
    render() {
        const { openControlPanel } = this.props;

        return (
            <Header>
                <Left>
                    <Button transparent onPress={() => openControlPanel()}>
                        <Icon name="menu" />
                    </Button>
                </Left>
                <Body>
                    <Title>Home</Title>
                </Body>
                <Right>
                    <Button transparent>
                        <Icon name="bulb" />
                    </Button>
                </Right>
            </Header>
        );
    }
}

HeaderComponent.propTypes = {
    openControlPanel: PropTypes.func.isRequired
};

export default HeaderComponent;
