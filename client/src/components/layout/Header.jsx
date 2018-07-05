import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  static propTypes = {};

  render() {
    return (
      <header className="header">
        <div className="container">
          <div className="header__left">
            <Link className="header__brand" to="/">
              Okasion
            </Link>
            <Link className="header__link" to="/createEvent">
              Create Event
            </Link>
          </div>
          <div className="header__right">
            <Link className="header__link" to="/register">
              Register
            </Link>
            <Link className="header__link" to="/login">
              Login
            </Link>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
