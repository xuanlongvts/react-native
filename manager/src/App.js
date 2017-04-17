import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers/index';
import LoginForm from './components/LoginForm';
import Router from './Router';

class App extends Component{

	componentWillMount(){
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
		const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
		return(
			<Provider store={store}>
				<Router />
			</Provider>
		)
	}
}

export default App;