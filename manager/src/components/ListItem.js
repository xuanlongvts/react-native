import React, {Component} from 'react';
import {Text, TouchableWithoutFeedback, View} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {CardSection} from './common/index';

class ListItem extends Component{

	render(){
		const {name} = this.props.employee;

		return(
			<TouchableWithoutFeedback>
				<View>
					<CardSection>
						<Text style={styles.titileStyle}>{name}</Text>
					</CardSection>
				</View>
			</TouchableWithoutFeedback>
		)
	}
}

const styles = {
	titileStyle: {
		fontSize: 18,
		paddingLeft: 15
	}
};

export default ListItem;