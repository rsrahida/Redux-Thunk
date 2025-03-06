import {
  COMMENTS_FETCH_FAILURE,
  COMMENTS_FETCH_REQUEST,
  COMMENTS_FETCH_SUCCESS,
} from "../actions/commentsIdActions";

const initialState = {
  comment: null,
  loading: false,
  error: null,
};

const commentsIdReducer = (state = initialState, action) => {
  switch (action.type) {
    case COMMENTS_FETCH_REQUEST:
      return { ...state, loading: true, error: null };
    case COMMENTS_FETCH_SUCCESS:
      return { ...state, loading: false, comment: action.payload };
    case COMMENTS_FETCH_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default commentsIdReducer;
