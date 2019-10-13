import React, { Component } from 'react';
// (3) Now the only thing we have to do is to import the requireAuth HOC...
import requireAuth from './requireAuth';

class Feature extends Component {
	render() {
		return <div>This is the feature!</div>;
	}
}

// (4) And use it with our Feature component like this:
export default requireAuth(Feature);
