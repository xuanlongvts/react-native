import React from 'react';
import {Scene, Router, Actions} from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';

const RouterComponent = () => (
	<Router sceneStyle={{paddingTop: 65}}>
		<Scene key="auth">
			<Scene key="login" component={LoginForm} title="Please Login" />	
		</Scene>

		<Scene key="main">
			<Scene 
				onRight={() => console.log('aaa')}
				rightTitle="Add"
				key="employeelist" 
				component={EmployeeList} 
				title="Employees" />
		</Scene>
	</Router>
)

export default RouterComponent;