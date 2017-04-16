import React, {Component} from 'react';
import {View} from 'react-native';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {Header} from './components/common/Header';
import reducers from './reducers/index';
import LibraryList from './components/LibraryList';

class App extends Component{

	render(){
		return(
			<Provider store={createStore(reducers)}>
				<View>
					<Header headerText="Tech Stack" />
					<LibraryList />
				</View>
			</Provider>
		)
	}
}

export default App;