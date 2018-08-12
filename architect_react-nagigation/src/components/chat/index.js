import React from 'react';
import PropTypes from 'prop-types';
import { createBottomTabNavigator } from 'react-navigation';
import { Button, Text, Icon, Footer, FooterTab } from 'native-base';

import * as nameRouter from './listRouters';

let listRouters = {};
nameRouter.listRoutersChat.length > 0 &&
    nameRouter.listRoutersChat.map(item => {
        listRouters[item.screen] = {
            screen: props => <item.component {...props} />
        };
    });

const bottomTabBar = props => {
    const {
        navigation: {
            navigate,
            state: { index }
        }
    } = props;

    return (
        <Footer>
            <FooterTab>
                {nameRouter.listRoutersChat.length > 0 &&
                    nameRouter.listRoutersChat.map((item, key) => {
                        return (
                            <Button vertical active={index === key} onPress={() => navigate(item.screen)} key={key}>
                                <Icon name={item.ico} />
                                <Text>{item.title}</Text>
                            </Button>
                        );
                    })}
            </FooterTab>
        </Footer>
    );
};

export default createBottomTabNavigator(listRouters, {
    tabBarPosition: 'bottom',
    tabBarComponent: bottomTabBar
});

bottomTabBar.propTypes = {
    navigation: PropTypes.object.isRequired
};
