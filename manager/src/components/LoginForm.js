import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {connect} from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../actions/index';
import {Card, CardSection, Input, Button, Spinner} from './common/index';

class LoginForm extends Component{

	onEmailChange(text){
		this.props.emailChanged(text);
	}

	onPasswordChange(text){
		this.props.passwordChanged(text);
	}

	onButtonPress(){
		const {email, password} = this.props;

		this.props.loginUser({email, password});
	}

	renderButton(){
		if(this.props.loading){
			return <Spinner size="large" />;
		}

		// if(this.props.loginSuccess){
		// 	return <Text style={styles.loginSuccess}>Login Success</Text>
		// }

		return(
			<Button onPress={this.onButtonPress.bind(this)}>Login</Button>
		)
	}

	render(){

		return(
			<Card>
				<CardSection>
					<Input 
						label="Email"
						placeholder="email@gmail.com"
						onChangeText={this.onEmailChange.bind(this)}
						value={this.props.email}
					/>
				</CardSection>

				<CardSection>
					<Input
						secureTextEntry
						label="Password"
						placeholder="Password"
						onChangeText={this.onPasswordChange.bind(this)}
						value={this.props.password}
					/>
				</CardSection>

				<Text style={styles.errTextStyle}>
					{this.props.error}
				</Text>

				<View>
					{this.renderButton()}
				</View>
			</Card>
		)		
	}
}

const styles = {
	errTextStyle: {
		fontSize: 20,
		alignSelf: 'center',
		color: 'red'
	},
	loginSuccess: {
		fontSize: 20,
		color: 'blue',
		alignSelf: 'center'
	}
}

const mapStateToProps = state => {
	const {email, password, error, loading, loginSuccess} = state.auth;

	return {email, password, error, loading, loginSuccess};
}

export default connect(mapStateToProps, 
	{ emailChanged, passwordChanged, loginUser }
)(LoginForm);