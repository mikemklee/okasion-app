import React, { Component } from "react";
import { Link } from "react-router-dom";

// components
import ProfileForm from "../forms/ProfileForm";

class CreateProfile extends Component {
  render() {
    return (
      <div className="createProfile">
        <Link to="/dashboard" className="createProfile__goback">
          Go Back
        </Link>
        <h1 className="createProfile__title">Create Your Profile</h1>
        <h1 className="createProfile__subtitle">
          Let's fill out some information to make your profile stand out.
        </h1>
        <ProfileForm />
      </div>
    );
  }
}

export default CreateProfile;
