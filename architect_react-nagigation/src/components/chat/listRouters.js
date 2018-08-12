import LucyChatComponent from './LucyChat';
import JadeChatComponent from './JadeChat';
import NineChatComponent from './NineChat';

import { NAMESPACE_CHAT } from '../../consts';

export const LucyChatScreen = `${NAMESPACE_CHAT}/LucyChatScreen`;
export const JadeChatScreen = `${NAMESPACE_CHAT}/JadeChatScreen`;
export const NineChatScreen = `${NAMESPACE_CHAT}/NineChatScreen`;

export const listRoutersChat = [
    {
        title: 'Lucy',
        ico: 'bowtie',
        screen: LucyChatScreen,
        component: LucyChatComponent
    },
    {
        title: 'Jade',
        ico: 'headset',
        screen: JadeChatScreen,
        component: JadeChatComponent
    },
    {
        title: 'Nine',
        ico: 'briefcase',
        screen: NineChatScreen,
        component: NineChatComponent
    }
];
