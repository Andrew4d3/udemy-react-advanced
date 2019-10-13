// (1) We have to find a way to redirect our app if the user is not logged in. To achieve this we need to implement a HOC
// This is something we already did in a past lecture, so we're going to copy&paste that code
import React, { Component } from 'react';
import { connect } from 'react-redux';

export default ChildComponent => {
	class ComposedComponent extends Component {
		// Our component just got rendered
		componentDidMount() {
			this.shouldNavigateAway();
		}
		// Our component just got updated
		componentDidUpdate() {
			this.shouldNavigateAway();
		}
		shouldNavigateAway() {
			if (!this.props.auth) {
				this.props.history.push('/');
			}
		}
		render() {
			return <ChildComponent {...this.props} />;
		}
	}
	function mapStateToProps(state) {
		// (2) There's a little modificationg thoug, the redux state is slightly different. Remember, now we're storing the user's token inside an "authenticated" property
		return { auth: state.auth.authenticated };
	}
	return connect(mapStateToProps)(ComposedComponent);
};
