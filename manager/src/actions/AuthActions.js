import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
	EMAIL_CHANGED,
	PASSWORD_CHANGED,
	LOGIN_USER_SUCCESS,
	LOGIN_USER_FAIL,
	LOGIN_USER
} from './types';

export const emailChanged = text => ({
	type: EMAIL_CHANGED,
	payload: text
})

export const passwordChanged = text => ({
	type: PASSWORD_CHANGED,
	payload: text
})

const loginUserFail = dispatch => {
	dispatch({
		type: LOGIN_USER_FAIL
	})
}

const loginUserSuccess = (dispatch, user) => {
	dispatch({
		type: LOGIN_USER_SUCCESS,
		payload: user
	});

	Actions.main();
}

export const loginUser = ({email, password}) => {
	return (dispatch) => {
		dispatch({type: LOGIN_USER});

		firebase.auth().signInWithEmailAndPassword(email, password)
		.then(user => loginUserSuccess(dispatch, user))
		.catch(err => {
			console.log('err: ', err);
			
			firebase.auth().createUserWithEmailAndPassword(email, password)
				.then(user => loginUserSuccess(dispatch, user))
				.catch(() => loginUserFail(dispatch))
		})
	}	
}