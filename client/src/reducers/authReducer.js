
import {FETCH_USER, AUTH_USER, LOG_OUT } from '../actions/types';

export default (state={}, action) => {
	switch(action.type){
		case FETCH_USER:
			return {...state, credits: action.payload};
		case AUTH_USER: 
			return {...state, authenticated: true};
		case LOG_OUT:
			return {...state, authenticated: false}
		default:
			return state;
	}
}