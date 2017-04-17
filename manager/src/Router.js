import React from 'react';
import {Scene, Router, Actions} from 'react-native-router-flux';
import LoginForm from './components/LoginForm';

const RouterComponent = () => (
	<Router sceneStyle={{paddingTop: 65}}>
		<Scene key="auth">
			<Scene key="login" component={LoginForm} title="Please Login" />
		</Scene>
	</Router>
)

export default RouterComponent;