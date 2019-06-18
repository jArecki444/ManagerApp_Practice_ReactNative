import { combineReducers } from 'redux';
import AuthRecucer from './AuthRecucer';
import EmployeeFormReducer from './EmployeeFormReducer';

export default combineReducers({
    auth: AuthRecucer,
    employeeForm: EmployeeFormReducer
});