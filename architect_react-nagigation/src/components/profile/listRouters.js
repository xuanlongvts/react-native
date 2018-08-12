import ProfileComponent from './Profile';
import EditScreenOneComponent from './EditScreenOne';
import EditScreenTwoComponent from './EditScreenTwo';

import { NAMESPACE_PROFILE } from '../../consts';

export const ProfileMainScreen = `${NAMESPACE_PROFILE}/ProfileMainScreen`;
export const EditScreenOne = `${NAMESPACE_PROFILE}/EditScreenOne`;
export const EditScreenTwo = `${NAMESPACE_PROFILE}/EditScreenTwo`;

export const listRoutersProfile = [
    {
        title: 'Profile',
        screen: ProfileMainScreen,
        component: ProfileComponent
    },
    {
        title: 'EditScreenOne',
        screen: EditScreenOne,
        component: EditScreenOneComponent
    },
    {
        title: 'EditScreenTwo',
        screen: EditScreenTwo,
        component: EditScreenTwoComponent
    }
];
