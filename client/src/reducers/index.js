import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './authReducer';
import surveyReducer from './surveyReducer';
import {LOG_OUT} from '../actions/types';

const appReducer = combineReducers({
	auth: authReducer,
	form: formReducer,
	surveys: surveyReducer
	
	
});

export default appReducer;