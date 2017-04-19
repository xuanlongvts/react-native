import React from 'react';
import {Text, View, Modal} from 'react-native';
import {CardSection, Card} from './CardSection';
import {Button} from './Button';

const Confirm = ({children, visible, onAccept, onDecline}) => {
	const { containerStyle, textStyle, cardSectionStyle, buttonStyle } = styles;

	return(
		<Modal 
			visible={visible}
			transparent
			animationType="slide"
			onRequestClose={()=> {}}
		>
			<View style={styles.containerStyle}>
				<CardSection style={cardSectionStyle}>
					<Text style={textStyle}>{children}</Text>
				</CardSection>

				<CardSection style={cardSectionStyle}>
					<Button onPress={onAccept} style={buttonStyle}>Yes</Button>
					<Button onPress={onDecline} style={buttonStyle}>No</Button>
				</CardSection>
			</View>
		</Modal>
	)
}

const styles = {
	cardSectionStyle: {
		justifyContent: 'center'
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
	buttonStyle: {
		color: '#aaa'
	}
};

export {Confirm};