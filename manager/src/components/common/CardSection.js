import React from 'react';
import {View} from 'react-native';

const CardSection = props => {
	return(
		<View style={styles.containerStyle}>
			{props.children}
		</View>
	)
}

const styles = {
	containerStyle: {
		borderWidth: 1,
		borderRadius: 2,
		borderColor: '#ddd',
		borderBottomWidth: 0,
		marginLeft: 5,
		marginRight: 5,
		marginBottom: 10,
		paddingTop: 5,
		paddingBottom: 5
	}
}

export {CardSection};