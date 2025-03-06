import { combineReducers } from "redux";
import postReducer from "./postReducer";
import commentsIdReducer from "./commentIdReducer";

const rootReducer = combineReducers({
  posts: postReducer,
  comment: commentsIdReducer,
});

export default rootReducer;
