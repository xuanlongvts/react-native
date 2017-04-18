import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {connect} from 'react-redux';
import {Card, CardSection, Button} from './common';
import EmployeeForm from './EmployeeForm';

class EmployeeCreate extends Component{

	render(){
		return(
			<Card>
				<EmployeeForm />
				<Button>
					Create
				</Button>
			</Card>
		)
	}
}

export default EmployeeCreate;