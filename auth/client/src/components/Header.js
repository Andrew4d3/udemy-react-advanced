// (1) Here we're going to define our Header component which will be visible across all the web app
import React, { Component } from "react";
import { Link } from "react-router-dom";

// (2) It's going to be a class component this time
class Header extends Component {
  render() {
    return (
      <div>
        <Link to="/">Redux Auth</Link>
        <Link to="/singin">Sing In</Link>
        <Link to="/signup">Sing Up</Link>
        <Link to="/sigout">Sign Out</Link>
        <Link to="/feature">Feature</Link>
      </div>
    );
  }
}

// (3) Don't forget to export your component
export default Header;