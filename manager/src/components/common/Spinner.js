import React from 'react';
import {View, ActivityIndicator, Text} from 'react-native';

const Spinner = ({size}) => {
	return(
		<View style={styles.spinnerStyle}>
			<ActivityIndicator size={size || 'large'} />
		</View>
	)
}

const styles = {
	spinnerStyle: {
		flex: 1,
		marginTop: 20,
		marginBottom: 10,
		justifyContent: 'center',
		alignItems: 'center',
	}
}

export {Spinner};