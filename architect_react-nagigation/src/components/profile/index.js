import { createStackNavigator } from 'react-navigation';

import * as nameRouter from './listRouters';

let listRouters = {};
nameRouter.listRoutersProfile.length > 0 &&
    nameRouter.listRoutersProfile.map(item => {
        listRouters[item.screen] = {
            screen: item.component
        };
    });

export default createStackNavigator(listRouters, {
    initialRouteName: nameRouter.ProfileMainScreen
});
