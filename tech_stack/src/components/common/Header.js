import React from 'react';
import {Text, View} from 'react-native';

const Header = props => {
	const {textStyle, viewStyle} = styles;

	return(
		<View style={viewStyle}>
			<Text style={textStyle}>{props.headerText}</Text>
		</View>
	)
}

const styles = {
	viewStyle: {
		backgroundColor: '#212121',
		justifyContent: 'center',
		alignItems: 'center',
		height: 60,
		position: 'relative'
	},
	textStyle: {
		fontSize: 20,
		color: '#fff'
	}
}

export {Header};