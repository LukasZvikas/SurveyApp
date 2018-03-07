
import {AUTH_USER, LOG_OUT } from '../actions/types';

export default (state={}, action) => {
	switch(action.type){
		case AUTH_USER: 
			return {...state, authenticated: true};
		case LOG_OUT:
			return {...state, authenticated: false}
		default:
			return state;
	}
}