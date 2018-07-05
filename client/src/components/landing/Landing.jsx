import React, { Component } from "react";
import { Link } from "react-router-dom";

class Landing extends Component {
  render() {
    return (
      <div className="landing">
        <h1 className="landing__title">Landing</h1>
        <Link to="/feed">Get Started</Link>
      </div>
    );
  }
}

export default Landing;
