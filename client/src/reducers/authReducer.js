
import {FETCH_USER, AUTH_USER, LOG_OUT, AUTH_ERROR } from '../actions/types';

export default (state={}, action) => {
	switch(action.type){
		case FETCH_USER:
			return {...state, credits: action.payload};
		case AUTH_USER: 
			return {...state, authenticated: true};
		case LOG_OUT:
			return {...state, authenticated: false};
		case AUTH_ERROR: 
			return {...state, error: action.payload};
		default:
			return state;
	}
}