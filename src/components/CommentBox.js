import React, { Component } from "react";

// Just writing the CommentBox component. Nothing else...
class CommentBox extends Component {
  render() {
    return (
      <form>
        <h4>Add a comment</h4>
        <textarea />
        <div>
          <button>Submit Comment</button>
        </div>
      </form>
    );
  }
}

export default CommentBox;
