import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers/index';
import LoginForm from './components/LoginForm';

class App extends Component{

	componentVillMount(){
		var config = {
			apiKey: "AIzaSyBk7Jiqxuti9vtgtFcjWGtJ6Gs199tKdRk",
			authDomain: "manager-74460.firebaseapp.com",
			databaseURL: "https://manager-74460.firebaseio.com",
			projectId: "manager-74460",
			storageBucket: "manager-74460.appspot.com",
			messagingSenderId: "584931490315"
		};

		firebase.initializeApp(config);
	}

	render(){
		return(
			<Provider store={createStore(reducers)}>
				<View>
					<LoginForm />
				</View>
			</Provider>
		)
	}
}

export default App;