import React from "react";
import PostsList from "./components/PostsList/PostsList";
import CommentDetails from "./components/CommentDetails/CommentDetails";

const App = () => {
  return (
    <div>
      <PostsList />
      <CommentDetails id={1} />
    </div>
  );
};

export default App;
