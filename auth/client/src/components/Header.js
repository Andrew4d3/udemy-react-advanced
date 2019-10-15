import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// (1) The Header is showing all the nav options not matter wether the user is in session or not. It would be desireble to only show the appropriate options based on the auth state
// For this, we need to connect the Header to redux
import { connect } from 'react-redux';

class Header extends Component {
	// (4) We need to create a Helper function which will only reder the correct links based on the authenticated state
	renderLinks() {
		return this.props.authenticated
			? [
					<Link key="1" to="/signout">
						Sign Out
					</Link>,
					<Link key="2" to="/feature">
						Feature
					</Link>
			  ]
			: [
					<Link key="3" to="/signin">
						Sign In
					</Link>,
					<Link key="4" to="/signup">
						Sign Up
					</Link>
			  ];
	}

	render() {
		return (
			<div>
				<Link to="/">Redux Auth</Link>
				{/* (5) Let's refactor this code so that we call the renderLinks methods we just implemented */}
				{this.renderLinks()}
			</div>
		);
	}
}

// (2) We need to get the auth state from redux
function mapStateToProps(state) {
	return { authenticated: state.auth.authenticated };
}

// (3) And connect the Header component like this
export default connect(mapStateToProps)(Header);
