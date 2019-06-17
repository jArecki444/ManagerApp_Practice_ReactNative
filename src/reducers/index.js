import { combineReducers } from 'redux';
import AuthRecucer from './AuthRecucer';

export default combineReducers({
    auth: AuthRecucer
});