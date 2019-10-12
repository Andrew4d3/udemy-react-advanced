import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
// (1) In order to combine multiple HOC into one, we can use this utility function called "compose"
import { compose } from "redux";
import { connect } from "react-redux";
import * as actions from "../../actions";

class Signup extends Component {
  onSubmit = formProps => {
    // (3) Now we have access to the redux actions. So let's call the signup action with the form props from this component
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
        <button>Sing Up!</button>
      </form>
    );
  }
}

// (2) Just as we use compose in FP to combine different functions, we can use compose in react to combine (or compose) different HOC
export default compose(
  connect(
    null,
    actions
  ), // First we add connect-redux
  reduxForm({ form: "signup" }) // And then we include reduxForm
)(Signup);
