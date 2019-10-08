import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";

class Signup extends Component {
  // (3) This is our onSubmit method, for now we're just logging the props we took from the redux-form (email and password)
  onSubmit = formProps => {
    console.log(formProps);
  };

  render() {
    // (1) We need to use this redux-form function which was injected through the component props
    const { handleSubmit } = this.props;
    return (
      // (2) handleSubmit is a High-order function which will take our component onSubmit method and inject them the props we defined inside the Field components (email and password)
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
        {/* (4) Don't forget to include the signup button */}
        <button>Sing Up!</button>
      </form>
    );
  }
}

export default reduxForm({ form: "signup" })(Signup);
