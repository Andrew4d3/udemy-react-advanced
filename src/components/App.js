import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
// (1) We need to know whether the app is logged in or not. For that, we need to import the react-redux dependency
import { connect } from "react-redux";
import CommentBox from "components/CommentBox";
import CommentList from "components/CommentList";

// (2) We also need to refactor a little bit the App class component. So that we can export it at the button
class App extends Component {
  // (5) Now it's time to build our button based on the current auth state
  renderButton() {
    return this.props.auth ? (
      <button>Sing Out</button>
    ) : (
      <button>Sing In</button>
    );
  }

  renderHeader() {
    return (
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/post">Post a comment</Link>
        </li>
        <li>{this.renderButton()}</li>
      </ul>
    );
  }
  render() {
    return (
      <div>
        {/* (6) And don't forget to include the render method call inside the component's rendering */}
        {this.renderHeader()}
        <Route path="/post" component={CommentBox} />
        <Route path="/" exact component={CommentList} />
      </div>
    );
  }
}

// (3) We need to map the auth state into the App's props
function mapStateToProps(state) {
  return { auth: state.auth };
}

// (4) Here we connect the App with redux and export it
export default connect(mapStateToProps)(App);
