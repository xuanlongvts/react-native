import React, {Component} from 'react';
import {View, Text} from 'react-native';
import firebase from 'firebase';
import {Header, Button, Spinner} from './components/common/index';
import LoginForm from './components/LoginForm';

class App extends Component{
	state = {
		loggedIn: null
	};

	componentWillMount() {
		firebase.initializeApp({
			apiKey: "AIzaSyCwCa3jvGEzzedEQM9XLzl7Z0UJzqv0EAc",
		    authDomain: "authentication-ea7bd.firebaseapp.com",
		    databaseURL: "https://authentication-ea7bd.firebaseio.com",
		    projectId: "authentication-ea7bd",
		    storageBucket: "authentication-ea7bd.appspot.com",
		    messagingSenderId: "713061688765"
		});

		firebase.auth().onAuthStateChanged(user => {
			if(user){
				this.setState({
					loggedIn: true
				})
			}
			else{
				this.setState({
					loggedIn: false
				})
			}
		})
	}

	renderContent(){
		switch (this.state.loggedIn){
			case true:
				return (
					<Button onPress={() => firebase.auth().signOut()}>
						Log out
					</Button>
				)
			case false:
				return <LoginForm />;
			default:
				return <Spinner size="large" />;
		}
	}

	render(){
		return(
			<View>
				<Header headerText="Authentication" />
				{this.renderContent()}
			</View>
		)
	}
}

export default App;
