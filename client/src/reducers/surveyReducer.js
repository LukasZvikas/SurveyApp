
import { SEND_SURVEY } from '../actions/types';

export default function(state={}, action){

	switch(action.type){
		case SEND_SURVEY: 
			console.log(action.payload);
		default:
			return state;
	}
}