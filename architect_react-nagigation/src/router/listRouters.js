import HomeComponent from '../components/home';
import ChatComponent from '../components/chat';
import ProfileComponent from '../components/profile';
import RedditComponent from '../components/reddit';

import { NAMESPACE_NAV } from '../consts';
// Screen of react-navigation
export const DrawerOpen = 'DrawerOpen';

// Screen of app
export const HomeScreen = `${NAMESPACE_NAV}/HomeScreen`;
export const ChatScreen = `${NAMESPACE_NAV}/ChatScreen`;
export const ProfileScreen = `${NAMESPACE_NAV}/ProfileScreen`;
export const RedditScreen = `${NAMESPACE_NAV}/RedditScreen`;

export const listRouterScreen = [
    {
        title: 'Home',
        screen: HomeScreen,
        component: HomeComponent
    },
    {
        title: 'Chat',
        screen: ChatScreen,
        component: ChatComponent
    },
    {
        title: 'Profile',
        screen: ProfileScreen,
        component: ProfileComponent
    },
    {
        title: 'Reddit Api',
        screen: RedditScreen,
        component: RedditComponent
    }
];
