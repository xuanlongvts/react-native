import {combineReducers} from 'redux';
import Authentication from './AuthReducer';
import EmployeeFormReducer from './EmployeeFormReducer';
import EmployeeReducer from './EmployeeReducer';

export default combineReducers({
	auth: Authentication,
	employeeForm: EmployeeFormReducer,
	employees: EmployeeReducer
})