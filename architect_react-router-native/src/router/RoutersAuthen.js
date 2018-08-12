import React, { PureComponent } from 'react';
import { Router, Scene } from 'react-native-router-flux';

import AsyncHome from '../components/home';
import AsyncReddit from '../components/reddit';

// const AsyncHome = asyncComponent(() => import('../components/home'));
// const AsyncReddit = asyncComponent(() => import('../components/reddit'));

export const page_home = 'homeScreen';
export const page_reddit = 'redditScreen';

export const ListRouters = [
    {
        id: page_home,
        title: 'Home',
        component: AsyncHome,
        initial: true
    },
    {
        id: page_reddit,
        title: 'Reddit api',
        component: AsyncReddit
    }
];

class RoutersAuthen extends PureComponent {
    render() {
        return (
            <Router hideNavBar>
                <Scene key="root">
                    {ListRouters.map(item => {
                        return <Scene key={item.id} component={item.component} title={item.title} initial={item.initial} />;
                    })}
                </Scene>
            </Router>
        );
    }
}

export default RoutersAuthen;
