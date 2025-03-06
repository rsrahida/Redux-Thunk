export const COMMENTS_FETCH_REQUEST = "COMMENTS_FETCH_REQUEST";
export const COMMENTS_FETCH_SUCCESS = "COMMENTS_FETCH_SUCCESS";
export const COMMENTS_FETCH_FAILURE = "COMMENTS_FETCH_FAILURE";

export const fetchCommentById = (id) => {
  return async (dispatch) => {
    dispatch({ type: COMMENTS_FETCH_REQUEST });
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/comments/${id}`
      );
      if (!response.ok) {
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }
      const data = await response.json();
      dispatch({ type: COMMENTS_FETCH_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: COMMENTS_FETCH_FAILURE, payload: error.message });
    }
  };
};

export default fetchCommentById;
