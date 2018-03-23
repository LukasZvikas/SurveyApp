import { FETCH_SURVEYS } from "../actions/types";

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_SURVEYS:
    	const list = action.payload;
    	console.log(list);
      return  action.payload;
    default:
      return state;
  }
}
