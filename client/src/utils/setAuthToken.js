import axios from "axios";

/**
 * attach auth token to header of every axios requests
 * @function setAuthToken
 * @param {string} token - jwt token
 */

const setAuthToken = token => {
  if (token) {
    // Apply to every request
    axios.defaults.headers.common["Authorization"] = token;
  } else {
    // Delete auth header
    delete axios.defaults.headers.common["Authorization"];
  }
};

export default setAuthToken;
