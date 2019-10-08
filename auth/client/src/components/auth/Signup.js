import React, { Component } from "react";
// (3) Now we have to import these two methods inside the component we want to use redux-form
import { reduxForm, Field } from "redux-form";

class Signup extends Component {


  render() {
    return (
      <form>
        <fieldset>
          <label>Email</label>
          {/* (5) Now we can start using the Field component from redux-form on this way. */}
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
            // (6) Notice how we indicate which component we want to render. In this case, a regular HTML input
            component="input"
            autoComplete="none"
          />
        </fieldset>
      </form>
    );
  }
}

// (4) The reduxForm property is a High Order component which will conect our component with our redux-form reducer
export default reduxForm({ form: "signup" })(Signup);
