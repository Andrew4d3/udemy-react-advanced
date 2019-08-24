import React from "react";
// (1) We're going to add our App routes here, first we need to import the Route component from the react-router dependency
import { Route } from "react-router-dom";
import CommentBox from "components/CommentBox";
import CommentList from "components/CommentList";

export default () => {
  // (2) And then we proceed to add the corresponding routes on this way. We also need to add the "exact" prop so that the route can match the root "/" path exactly!
  return (
    <div>
      <Route path="/post" component={CommentBox} />
      <Route path="/" exact component={CommentList} />
    </div>
  );
};
