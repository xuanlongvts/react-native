import React from 'react';
import {Text, View, Modal} from 'react-native';
import {CardSection, Card} from './CardSection';
import {ButtonPopup} from './ButtonPopup';

const Confirm = ({children, visible, onAccept, onDecline}) => {
	const { containerStyle, textStyle, cardSectionStyle, buttonStyle, wrapBox} = styles;

	return(
		<Modal 
			visible={visible}
			transparent
			animationType="slide"
			onRequestClose={()=> {}}
		>
			<View style={containerStyle}>
				<View style={wrapBox}>
					<View>
						<Text style={textStyle}>{children}</Text>
					</View>

					<View style={cardSectionStyle}>
						<View style={buttonStyle}>
							<ButtonPopup onPress={onAccept}>Yes</ButtonPopup>
						</View>
						<View style={buttonStyle}>
							<ButtonPopup onPress={onDecline}>No</ButtonPopup>
						</View>
					</View>
				</View>
			</View>
		</Modal>
	)
}

const styles = {
	cardSectionStyle: {
		marginTop: 20		
	},
	textStyle: {
		fontSize: 18,
		textAlign: 'center',
		lineHeight: 40,
		backgroundColor: '#fff'
	},
	containerStyle: {
		backgroundColor: 'rgba(0, 0, 0, 0.75)',
		position: 'relative',
		justifyContent: 'center',
		flex: 1
	},
	wrapBox: {
		backgroundColor: '#fff', 
		padding: 10,
		margin: 10,
		borderRadius: 5
	},
	buttonStyle: {
		marginTop: 7
	}
};

export {Confirm};