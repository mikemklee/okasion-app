import React, { Component } from "react";
import { Link } from "react-router-dom";

import PropTypes from "prop-types";

class Header extends Component {
  static propTypes = {};

  render() {
    return (
      <header className="header">
        <Link className="header__brand" to="/">
          Okasion
        </Link>
        <Link className="header__link" to="/register">
          Register
        </Link>
        <Link className="header__link" to="/login">
          Login
        </Link>
        <Link className="header__link" to="/createEvent">
          Create Event
        </Link>
      </header>
    );
  }
}

export default Header;
