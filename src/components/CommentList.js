import React, { Component } from "react";
import { connect } from 'react-redux';

//(1) Let's refactor this component to make it work as a class rather than as a function

class CommentList extends Component {
  // (3) This is the class method that will populate the list based on the props received
  renderComments() {
    return this.props.comments.map(comment => {
      return <li key={comment}>{comment}</li>
    })
  }

  render() {
    // (2) Let's define the render method by displaying a HTML list, such list will be populated with another method
    return (
      <div>
        <ul>
          {this.renderComments()}
        </ul>
      </div>
    )
  }
}

// (4) We need to map the comments from the global state to the props component
function mapStateToProps(state) {
  return { comments: state.comments }
}

// (5) And connect everything
export default connect(mapStateToProps)(CommentList);