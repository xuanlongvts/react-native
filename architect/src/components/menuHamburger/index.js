import React from 'react';
import PropTypes from 'prop-types';
import { Button, Left, Icon } from 'native-base';

import { DrawerOpen } from '../../router/listRouters';

const menuHamburger = ({ navigation }) => (
    <Left>
        <Button transparent onPress={() => navigation.openDrawer(DrawerOpen)}>
            <Icon name="menu" />
        </Button>
    </Left>
);

menuHamburger.propTypes = {
    navigation: PropTypes.object.isRequired
};

export default menuHamburger;
