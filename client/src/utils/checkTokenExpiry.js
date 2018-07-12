import jwt_decode from "jwt-decode";

import store from "../store";
import setAuthToken from "./setAuthToken";
import { setCurrentUser, logoutUser } from "../actions/authActions";

/**
 * checks whether jwt token has been expired.
 * if still valid, authenticate user
 * if expired, logout user and redirec to login page
 * @function checkTokenExpiry
 */
const checkTokenExpiry = () => {
  // Check for token
  if (localStorage.jwtToken) {
    // Set auth token header auth
    setAuthToken(localStorage.jwtToken);
    // Decode token and get user info and exp
    const decoded = jwt_decode(localStorage.jwtToken);
    // Set user and isAuthenticated
    store.dispatch(setCurrentUser(decoded));

    // Check for expired token (valid for 60 minutes)
    const currentTime = Date.now() / 1000;
    if (decoded.exp < currentTime) {
      console.log("token expired!");
      // Logout User
      store.dispatch(logoutUser());
      // Redirect to login
      window.location.href = "/login";
    }
  }
};

export default checkTokenExpiry;
