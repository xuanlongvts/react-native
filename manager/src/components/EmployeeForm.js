import React, {Component} from 'react';
import {View, Text, Picker} from 'react-native';
import {connect} from 'react-redux';
import {CardSection, Input} from './common';
import {employeeUpdate, employeeResetForm} from '../actions/index';

class EmployeeForm extends Component{

	componentWillMount() {
		if(this.props.createNew){
			this.props.employeeResetForm();
		}
	}

	render(){

		return(
			<View>
				<CardSection>
					<Input
						label="Name"
						placeholder="NongNo"
						value={this.props.name}
						onChangeText={val => this.props.employeeUpdate({prop: 'name', val})}
					/>
				</CardSection>

				<CardSection>
					<Input
						label="Phone"
						placeholder="555-555-5555"
						value={this.props.phone}
						onChangeText={val => this.props.employeeUpdate({prop: 'phone', val})}
					/>
				</CardSection>

				<CardSection>
					<Text style={styles.pickerTextStyle}>Shift</Text>

					<Picker
						selectedValue={this.props.shift}
						onValueChange={val => this.props.employeeUpdate({prop: 'shift', val})}
					>
						<Picker.Item label="Monday" value="Monday" />
						<Picker.Item label="Tuesday" value="Tuesday" />
						<Picker.Item label="Wednesday" value="Wednesday" />
						<Picker.Item label="Thursday" value="Thursday" />
						<Picker.Item label="Friday" value="Friday" />
						<Picker.Item label="Saturday" value="Saturday" />
						<Picker.Item label="Sunday" value="Sunday" />
					</Picker>
				</CardSection>
			</View>
		)
	}
}

const styles = {
	pickerText: {
		fontSize: 18,
		paddingLeft: 20
	}
}

const mapStateToProps = state => {
	const {name, phone, shift} = state.employeeForm;

	return {name, phone, shift};
}

export default connect(mapStateToProps, 
	{employeeUpdate, employeeResetForm}
)(EmployeeForm);