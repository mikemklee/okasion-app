import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

// actions
import { addComment } from "actions/eventActions";

// components
import TextAreaField from "../common/TextAreaField";

class CommentForm extends Component {
  state = {
    text: "",
    errors: {}
  };

  componentWillReceiveProps(newProps) {
    if (newProps.errors) {
      this.setState({ errors: newProps.errors });
    }
  }

  onSubmit = event => {
    event.preventDefault();

    const { user } = this.props.auth;
    const { eventId } = this.props;

    const newComment = {
      text: this.state.text,
      name: user.name,
      avatar: user.avatar
    };

    this.props.addComment(eventId, newComment);
    this.setState({ text: "" });
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { errors } = this.state;

    return (
      <form className="comment__form" onSubmit={this.onSubmit}>
        <TextAreaField
          placeholder="Say something..."
          name="text"
          value={this.state.text}
          onChange={this.onChange}
          error={errors.text}
        />
        <input type="submit" value="Submit" className="comment__form__submit" />
      </form>
    );
  }
}

CommentForm.propTypes = {
  addComment: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  eventId: PropTypes.string.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { addComment }
)(CommentForm);
