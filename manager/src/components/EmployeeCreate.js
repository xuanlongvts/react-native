import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {connect} from 'react-redux';
import {Card, CardSection, Button} from './common';
import EmployeeForm from './EmployeeForm';
import {employeeUpdate, employeeCreate} from '../actions/index';

class EmployeeCreate extends Component{

	onButtonPress(){
		const {name, phone, shift} = this.props;

		this.props.employeeCreate({name, phone, shift});
	}

	render(){
		return(
			<Card>
				<EmployeeForm />
				<Button onPress={this.onButtonPress.bind(this)}>
					Create
				</Button>
			</Card>
		)
	}
}

const mapStateToProps = state => {
	const {name, phone, shift} = state.employeeForm;
	return {name, phone, shift};
}

export default connect(mapStateToProps, {
	employeeUpdate, employeeCreate
})(EmployeeCreate);