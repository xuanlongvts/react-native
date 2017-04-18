import React, {Component} from 'react';
import {View, Text, Picker} from 'react-native';
import {connect} from 'react-redux';
import {CardSection, Input} from './common';

class EmployeeForm extends Component{

	render(){
		return(
			<View>
				<CardSection>
					<Input
						label="Name"
						placeholder="NongNo"
					/>
				</CardSection>

				<CardSection>
					<Input
						label="Phone"
						placeholder="555-555-5555"
					/>
				</CardSection>

				<CardSection style={{flexDirection: 'column'}}>
					<Text style={styles.pickerText}>Shift</Text>

					<Picker>
						<Picker.Item lable="Monday" value="Monday" />
						<Picker.Item lable="Tuesday" value="Tuesday" />
						<Picker.Item lable="Wednesday" value="Wednesday" />
						<Picker.Item lable="Thursday" value="Thursday" />
						<Picker.Item lable="Friday" value="Friday" />
						<Picker.Item lable="Saturday" value="Saturday" />
						<Picker.Item lable="Sunday" value="Sunday" />
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

export default EmployeeForm;