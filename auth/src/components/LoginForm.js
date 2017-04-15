import React, {Component} from 'react';
import {Text, View} from 'react-native';
import firebase from 'firebase';
import {Button, Card, CardSection, Input, Spinner} from './common/index';

class LoginForm extends Component{

	state = {
		email: '',
		password: '',
		error: '',
		loading: false
	}

	onButtonPress(){
		const {email, password} = this.state;

		this.setState({
			error: '',
			loading: true
		});

		firebase.auth().signInWithEmailAndPassword(email, password)
			.then(this.onLoginSucess(this))
			.catch(() => {
				firebase.auth().createUserWithEmailAndPassword(email, password)
				.then(this.onLoginSucess.bind(this))
				.catch(this.onLoginFail.bind(this))
			});
	}

	onLoginFail(){
		this.setState({
			error: 'Authentication failed',
			loading: false
		})
	}

	onLoginSucess(){
		this.setState({
			email: '',
			password: '',
			loading: true,
			error: ''
		})
	}

	renderButton(){
		if(this.state.loading){
			return <Spinner size="small" />
		}

		return(
			<Button onPress={this.onButtonPress.bind(this)}>Log in</Button>
		)
	}

	render(){
		return(
			<Card>
				<CardSection>
					<Input
						placeholder="user@gmail.com"
						label="Email"
						value={this.state.email}
						onChangeText={email => this.setState({email})}
					/>
				</CardSection>

				<CardSection>
					<Input
						secureTextEntry
						placeholder="password"
						label="Password"
						value={this.state.password}
						onChangeText={password => this.setState({password})}
					/>
				</CardSection>

				<Text style={styles.errorTextStyle}>
					{this.state.error}
				</Text>

				<View>
					{this.renderButton()}
				</View>
			</Card>
		)
	}
}

const styles = {
	errorTextStyle: {
		fontSize: 20,
		alignSelf: 'center',
		color: 'red',
		marginBottom: 10
	}
}

export default LoginForm;