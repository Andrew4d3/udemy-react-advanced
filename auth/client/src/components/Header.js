import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
	render() {
		return (
			<div>
				<Link to="/">Redux Auth</Link>
				<Link to="/singin">Sing In</Link>
				<Link to="/signup">Sing Up</Link>
				{/* There was a typo here */}
				<Link to="/signout">Sign Out</Link>
				<Link to="/feature">Feature</Link>
			</div>
		);
	}
}

export default Header;
