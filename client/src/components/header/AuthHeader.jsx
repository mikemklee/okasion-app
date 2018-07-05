import React, { Component, Fragment } from "react";

import { Link } from "react-router-dom";

class AuthHeader extends Component {
  state = {
    menuOpened: false
  };

  toggleMenu = () => {
    this.setState(prevState => {
      return {
        menuOpened: !prevState.menuOpened
      };
    });
  };

  render() {
    const { user, logout } = this.props;
    const { menuOpened } = this.state;
    return (
      <Fragment>
        <Link className="header__link" to="/createEvent">
          Create Event
        </Link>
        <div className="header__user" onClick={this.toggleMenu}>
          <img src={user.avatar} alt={user.name} />
          {user.name}
          <i className="fas fa-sort-down" />
          {menuOpened && (
            <div className="header__user__menu">
              <div className="header__user__menu__item">
                <Link to="/">My Profile</Link>
              </div>
              <div className="header__user__menu__item">
                <Link to="/">Settings</Link>
              </div>

              <div onClick={logout} className="header__user__menu__item">
                Logout
              </div>
            </div>
          )}
        </div>
      </Fragment>
    );
  }
}

export default AuthHeader;
