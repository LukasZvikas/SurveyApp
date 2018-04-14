import { FETCH_SURVEYS } from "../actions/types";

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_SURVEYS:
<<<<<<< HEAD
    	return action.payload;
      return  action.payload;
=======
      return action.payload;
>>>>>>> sass
    default:
      return state;
  }
}
