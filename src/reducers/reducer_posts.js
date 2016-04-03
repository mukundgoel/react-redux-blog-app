
import { FETCH_POSTS, FETCH_POST, DELETE_POST } from "../actions/index";

// "all": has list of all blog posts
// "post": will hold a single post that will be viewed by user
const INITIAL_STATE = { all: [], post: null };

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case FETCH_POST:
      return { ...state, post: action.payload.data };
    case FETCH_POSTS:
      return { ...state, all: action.payload.data};
    default:
      return state;
  }
}
