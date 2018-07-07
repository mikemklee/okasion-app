import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

// actions
import { logoutUser } from "../../actions/authActions";

// components
import AuthHeader from "./AuthHeader";
import GuestHeader from "./GuestHeader";

class Header extends Component {
  onLogoutClick = event => {
    event.preventDefault();
    this.props.logoutUser();
  };

  render() {
    const { isAuthenticated, user } = this.props.auth;

    return (
      <header className="header">
        <div className="container">
          <div className="header__left">
            <Link className="header__brand" to="/">
              Okasion
            </Link>
            <Link className="header__link" to="/events">
              Events
            </Link>
          </div>
          <div className="header__right">
            {isAuthenticated ? (
              <AuthHeader user={user} logout={this.onLogoutClick} />
            ) : (
              <GuestHeader />
            )}
          </div>
        </div>
      </header>
    );
  }
}
Header.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Header);
