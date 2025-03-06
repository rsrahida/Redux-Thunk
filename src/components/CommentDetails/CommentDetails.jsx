import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./CommentDetails.css";
import { fetchCommentById } from "../../redux/actions/commentsIdActions.js";

const CommentDetails = ({ id }) => {
  const dispatch = useDispatch();
  const { comment, loading, error } = useSelector((state) => state.comment);

  useEffect(() => {
    dispatch(fetchCommentById(id));
  }, [dispatch, id]);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  if (!comment) {
    return <div className="comment">No comment found!</div>;
  }

  return (
    <div className="comment-container">
      <p className="title">Comment Details</p>
      <p>
        <strong>Name:</strong> {comment.name}
      </p>
      <p>
        <strong>Email:</strong> {comment.email}
      </p>
      <p>
        <strong>Body:</strong> {comment.body}
      </p>
    </div>
  );
};

export default CommentDetails;
