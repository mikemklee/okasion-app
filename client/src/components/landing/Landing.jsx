import React, { Component } from "react";
import { Link } from "react-router-dom";

class Landing extends Component {
  render() {
    return (
      <div className="landing container">
        <img className="landing__logo" src="./assets/pingpong.png" alt="logo" />
        <h1 className="landing__title">Okasion</h1>
        <p className="landing__subtitle">Find your people.</p>
        <Link className="landing__link" to="/feed">
          <span>Get Started</span>
          <span>
            <i class="fas fa-arrow-right" />
          </span>
        </Link>
      </div>
    );
  }
}

export default Landing;
