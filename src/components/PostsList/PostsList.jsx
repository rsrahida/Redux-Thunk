import React, { useEffect } from "react";
import "./PostsList.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../../redux/actions/postActions";

const PostsList = () => {
  const dispatch = useDispatch();
  const { posts, loading, error } = useSelector((store) => store.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  const filteredPosts = posts.filter((post) => post.title.length < 20);

  return (
    <div className="posts-container">
      <p className="title">Posts</p>
      <ul>
        {filteredPosts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default PostsList;
