import React, { Component } from 'react';
// (2) As usual, we need to connect the Signout component to redux. Here...
import { connect } from 'react-redux';
import * as actions from '../../actions';

class Signout extends Component {
	// (4) And here we use a lifecicle react method. So that the signout action dispatcher is triggered once the component is mount
	componentDidMount() {
		this.props.signout();
	}

	render() {
		return <div>Sorry to see you go</div>;
	}
}

// (3) And here. We don't use any redux state, that's why we pass null instead.
export default connect(
	null,
	actions
)(Signout);
