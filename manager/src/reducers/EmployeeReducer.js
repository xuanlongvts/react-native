import {
	EMPLOYEES_FETCH_SUCCESS
} from '../actions/types';

const init_state = {};

export default (state = init_state, action) => {
	switch (action.type){
		case EMPLOYEES_FETCH_SUCCESS:
			return action.payload;
		default:
			return state;
	}
}