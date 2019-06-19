import { combineReducers } from 'redux';
import AuthRecucer from './AuthRecucer';
import EmployeeFormReducer from './EmployeeFormReducer';
import EmployeeReducer from './EmployeeReducer';

export default combineReducers({
    auth: AuthRecucer,
    employeeForm: EmployeeFormReducer,
    employees: EmployeeReducer
});