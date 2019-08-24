import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import CommentBox from "components/CommentBox";
import CommentList from "components/CommentList";

// (2) Let's refactor our Main App into a Class component
export default class App extends Component {
  renderButton() {}
  // (3) Here we start building the header from our app which will contain the navigation links to each one of our routes
  renderHeader() {
    return (
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/post">Post a comment</Link>
        </li>
        {/* (4) Here we're going to call another render method that will display the SingIn button */}
        <li>{this.renderButton()}</li>
      </ul>
    );
  }
  render() {
    return (
      <div>
        <Route path="/post" component={CommentBox} />
        <Route path="/" exact component={CommentList} />
      </div>
    );
  }
}
