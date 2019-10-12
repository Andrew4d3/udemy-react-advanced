import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class Signup extends Component {
	onSubmit = formProps => {
		this.props.signup(formProps);
	};

	render() {
		const { handleSubmit } = this.props;
		return (
			<form onSubmit={handleSubmit(this.onSubmit)}>
				<fieldset>
					<label>Email</label>
					<Field
						name="email"
						type="text"
						component="input"
						autoComplete="none"
					/>
				</fieldset>
				<fieldset>
					<label>Password</label>
					<Field
						name="password"
						type="password"
						component="input"
						autoComplete="none"
					/>
				</fieldset>
				{/* (6) For last, let's display the error message just below the Signup form*/}
				<div>{this.props.errorMessage}</div>
				<button>Sing Up!</button>
			</form>
		);
	}
}

// (5) Now our Signup component needs to be aware of a new redux state, so let's implement a mapStateToProps function
function mapStateToProps(state) {
	return { errorMessage: state.auth.errorMessage };
}

export default compose(
	connect(
		mapStateToProps, // (5b) Don't forget to include it as part of the compose parameters
		actions
	),
	reduxForm({ form: 'signup' })
)(Signup);
