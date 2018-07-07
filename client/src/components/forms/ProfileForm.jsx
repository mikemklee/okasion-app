import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

// actions
import { createProfile } from "../../actions/profileActions";

// components
import TextField from "../common/TextField";
import TextAreaField from "../common/TextAreaField";
import TextIconField from "../common/TextIconField";

class ProfileForm extends Component {
  state = {
    handle: "",
    bio: "",
    twitter: "",
    linkedin: "",
    errors: {}
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  onSubmit = event => {
    event.preventDefault();
    const profileData = {
      handle: this.state.handle,
      bio: this.state.bio,
      twitter: this.state.twitter,
      linkedin: this.state.linkedin
    };
    console.log("passing to action", profileData);
    this.props.createProfile(profileData, this.props.history);
  };

  render() {
    const { errors } = this.state;

    return (
      <form className="profileForm" onSubmit={this.onSubmit}>
        <TextField
          placeholder="* Required"
          name="handle"
          label="Display Name"
          value={this.state.handle}
          onChange={this.onChange}
          error={errors.handle}
          info="A unique identifier for your profile."
        />
        <TextAreaField
          placeholder="Say something about yourself!"
          name="bio"
          label="Short Bio"
          value={this.state.bio}
          onChange={this.onChange}
          error={errors.bio}
        />
        <TextIconField
          placeholder="Twitter Profile URL (Optional)"
          name="twitter"
          icon="twitter"
          info="e.g., https://twitter.com/yourname"
          value={this.state.twitter}
          onChange={this.onChange}
          error={errors.twitter}
        />
        <TextIconField
          placeholder="LinkedIn Profile URL (Optional)"
          name="linkedin"
          icon="linkedin"
          info="e.g., https://www.linkedin.com/in/yourname/"
          value={this.state.linkedin}
          onChange={this.onChange}
          error={errors.linkedin}
        />
        <input type="submit" value="Submit" className="profileForm__submit" />
      </form>
    );
  }
}

ProfileForm.propTypes = {
  createProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapDispatchToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default withRouter(
  connect(
    mapDispatchToProps,
    { createProfile }
  )(ProfileForm)
);
