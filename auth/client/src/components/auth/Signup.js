// (1) Let's create our Sign Up form component here
import React, { Component } from 'react';

class Signup extends Component {
    // (2) For now, it will only contain some fields inside a Form container
    render() {
        return (
            <form>
                <fieldset>
                    <label>Email</label>
                </fieldset>
                <fieldset>
                    <label>Password</label>
                </fieldset>
            </form>
        )
    }
}

export default Signup;