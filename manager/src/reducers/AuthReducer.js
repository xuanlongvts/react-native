import {
	EMAIL_CHANGED,
	PASSWORD_CHANGED,
	LOGIN_USER_SUCCESS,
	LOGIN_USER_FAIL,
	LOGIN_USER
} from '../actions/types';

const init_state = {
	email: '',
	password: '',
	user: null,
	error: '',
	loading: false
}

export default (state = init_state, action) => {
	switch (action.type){
		case EMAIL_CHANGED:
			return {
				...state,
				email: action.payload
			}
		case PASSWORD_CHANGED:
			return {
				...state,
				password: action.payload
			}
		case LOGIN_USER:
			return {
				...state,
				loading: true,
				error: ''
			}
		case LOGIN_USER_SUCCESS:
			return {
				...state,
				...init_state,
				user: action.payload
			}
		case LOGIN_USER_FAIL:
			return {
				...state,
				error: 'Authentication Failed',
				password: '',
				loading: true
			}
		default:
			return state;
	}
}