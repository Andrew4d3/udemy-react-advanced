import React from "react";
import CommentBox from "./CommentBox";
import CommentList from "./CommentList";

// For the moment, we are just rendering some text in the main App component
export default () => {
  return (
    <div>
      <CommentBox />
      <CommentList />
    </div>
  );
};
