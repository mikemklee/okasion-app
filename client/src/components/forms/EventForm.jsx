import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

import { createEvent } from "../../actions/eventActions";

import TextField from "../common/TextField";
import TextAreaField from "../common/TextAreaField";
import SelectListField from "../common/SelectListField";

// Select options for status
const options = [
  { label: "Select a topic", value: 0 },
  { label: "Arts & Culture", value: "Arts & Culture" },
  { label: "Technology", value: "Technology" },
  { label: "Career & Business", value: "Career & Business" },
  { label: "Education & Learning", value: "Education & Learning" },
  { label: "Fitness", value: "Fitness" },
  { label: "Food & Drink", value: "Food & Drink" },
  { label: "Other", value: "Other" }
];
class EventForm extends Component {
  state = {
    title: "",
    topic: "",
    description: "",
    errors: {}
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  onSubmit = event => {
    event.preventDefault();
    const { user } = this.props.auth;
    const newEvent = {
      title: this.state.title,
      topic: this.state.topic,
      description: this.state.description,
      host: user.name,
      avatar: user.avatar
    };
    this.props.createEvent(newEvent, this.props.history);
    console.log("submitted: ", newEvent);
    this.setState({
      title: "",
      topic: "",
      description: ""
    });
  };

  render() {
    const { errors } = this.state;

    return (
      <form className="eventForm" onSubmit={this.onSubmit}>
        <TextField
          placeholder="What is the event called?"
          name="title"
          label="Title"
          value={this.state.title}
          onChange={this.onChange}
          error={errors.title}
        />
        <SelectListField
          name="topic"
          label="Topic"
          value={this.state.category}
          onChange={this.onChange}
          error={errors.category}
          options={options}
        />
        <TextAreaField
          placeholder="What is it about?"
          name="description"
          label="Description"
          value={this.state.description}
          onChange={this.onChange}
          error={errors.description}
        />
        <input type="submit" className="eventForm__submit" />
      </form>
    );
  }
}

EventForm.propTypes = {
  createEvent: PropTypes.func.isRequired,
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
    { createEvent }
  )(EventForm)
);
