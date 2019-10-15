import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

// (2) And import it on this way...
import './HeaderStyle.css';

class Header extends Component {
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
			// (3) Now we can start marking our code with CSS classes
			<div className="header">
				<Link to="/">Redux Auth</Link>
				{this.renderLinks()}
			</div>
		);
	}
}

function mapStateToProps(state) {
	return { authenticated: state.auth.authenticated };
}

export default connect(mapStateToProps)(Header);
