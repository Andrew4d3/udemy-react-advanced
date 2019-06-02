import React, { Component } from "react";
// (1) We need to connect this component to redux, so let's import the required dependencies
import { connect } from "react-redux";
import * as actions from "actions"; // (2) And here we're importing all our action dispatchers

// Now it's time to set the event handlers
class CommentBox extends Component {
  state = { comment: "" };

  handleChange = event => {
    this.setState({ comment: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    // (4) And here we call the saveComment action dispatcher, with the current entered comment as parameter
    this.props.saveComment(this.state.comment);
    this.setState({ comment: "" });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h4>Add a comment</h4>
        <textarea value={this.state.comment} onChange={this.handleChange} />
        <div>
          <button>Submit Comment</button>
        </div>
      </form>
    );
  }
}

// (3) We wrapp our component around the connect method from redux
// It receives two function parameters: mapStateToProps and mapDispatchToProps
// This component doesn't utilize a redux state so we just pass null
// As second parameter we pass the imported action dispatchers
export default connect(
  null,
  actions
)(CommentBox);

// (5) Everything seems to be working OK in our app. But now our tests are failing. What could go wrong?
