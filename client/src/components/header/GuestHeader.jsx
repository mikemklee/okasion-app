import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const GuestHeader = () => {
  return (
    <Fragment>
      <Link className="header__link header__link--signup" to="/register">
        Sign Up
      </Link>
      <Link className="header__link" to="/login">
        Login
      </Link>
    </Fragment>
  );
};

export default GuestHeader;
