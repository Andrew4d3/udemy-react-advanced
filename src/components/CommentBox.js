import React, { Component } from "react";
// (1) We need to connect this component to redux, so let's import the required dependencies
import { connect } from "react-redux";
import * as actions from "actions";

// Now it's time to set the event handlers
class CommentBox extends Component {
  state = { comment: "" };

  handleChange = event => {
    this.setState({ comment: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.saveComment(this.state.comment);
    this.setState({ comment: "" });
  };

  render() {
    // (1) Let's include the button to fetch the comments from the server
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h4>Add a comment</h4>
          <textarea value={this.state.comment} onChange={this.handleChange} />
          <div>
            <button>Submit Comment</button>
          </div>
        </form>
        <button onClick={this.props.fetchComments}>Fetch Comments</button>
      </div>
    );
  }
}

export default connect(
  null,
  actions
)(CommentBox);
