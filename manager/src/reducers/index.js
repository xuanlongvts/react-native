import {combineReducers} from 'redux';
import Authentication from './AuthReducer';

export default combineReducers({
	auth: Authentication
})