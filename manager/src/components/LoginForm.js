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
		
		//this.props.loginUser({email, password});
	}

	renderButton(){
		if(this.props.loading){
			return <Spinner size="large" />;
		}

		return(
			<Button onPress={this.onButtonPress(this)}>Login</Button>
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
	}
}

const mapStateToProps = auth => {
	const {email, password, error, loading} = auth;

	return {email, password, error, loading};
}

export default connect(mapStateToProps, 
	{ emailChanged, passwordChanged, loginUser }
)(LoginForm);