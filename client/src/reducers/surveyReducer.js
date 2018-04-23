import { FETCH_SURVEYS, LOG_OUT} from "../actions/types";

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_SURVEYS:
      return action.payload;
    case LOG_OUT: 
      return [];
    default:
      return state;
  }
}
