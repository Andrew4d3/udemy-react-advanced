import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { connect } from 'react-redux';
// (3) Now let's import all the redux actions
import * as actions from '../../actions';

class Signup extends Component { 
  onSubmit = formProps => {
    console.log(formProps);
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

// (4) Here we need to connect our Component to redux using the connect method. But we're already using a High order component (reduxForm).
// So we need to find a better way to do this, without cluttering more code into one line
export default reduxForm({ form: "signup" })(Signup);
