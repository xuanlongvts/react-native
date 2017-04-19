import {
	EMPLOYEE_UPDATE,
	EMPLOYEE_CREATE,
	EMPLOYEE_SAVE_SUCCESS
} from '../actions/types';

const init_state = {
	name: '',
	phone: '',
	shift: 'Monday'
}

export default (state = init_state, action) => {
	switch (action.type){
		case EMPLOYEE_UPDATE:
			return {
				...state,
				[action.payload.prop]: action.payload.val
			}
		case EMPLOYEE_CREATE:
			return init_state;
		case EMPLOYEE_SAVE_SUCCESS:
			return init_state;
		default:
			return state;
	}
}