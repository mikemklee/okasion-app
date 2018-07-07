import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import format from "date-fns/format";

// actions
import {
  getEventById,
  addAttendee,
  removeAttendee
} from "../../actions/eventActions";

// utils
import { amIAttending } from "../../utils/amIAttending";

class EventHeader extends Component {
  componentDidMount() {
    this.props.getEventById(this.props.eventId);
  }

  componentDidUpdate() {
    this.props.getEventById(this.props.eventId);
  }

  onAttendClick = id => () => {
    this.props.addAttendee(id);
    this.props.getEventById(this.props.eventId);
  };

  onCancelClick = id => () => {
    this.props.removeAttendee(id);
    this.props.getEventById(this.props.eventId);
  };

  render() {
    const { user } = this.props.auth;
    const { event } = this.props.event;
    let attending = amIAttending(user.id, event.attendees);

    return (
      <div className="eventView__header">
        <div className="eventView__header--left">
          <div className="eventView__header__date">
            {format(event.date, "dddd")}, {format(event.date, "MMMM Do")}
          </div>
          <h1 className="eventView__header__title">{event.title}</h1>
          <Link
            to={`/profile/${event.host}`}
            className="eventView__header__host"
          >
            <img src={event.hostPhoto} alt="host" />
            <span>
              Hosted by <strong>{event.host}</strong>
            </span>
          </Link>
        </div>
        <div className="eventView__header--right">
          <div className="eventView__header__attendees">
            {event.attendees ? (
              <span>{event.attendees.length} Members Attending</span>
            ) : (
              <span>Be the first to join this event!</span>
            )}
          </div>
          <div className="eventView__header__actions">
            {attending ? (
              <Fragment>
                <span className="eventView__header__actions--info">
                  You are attending this event.
                </span>
                <div
                  onClick={this.onCancelClick(event._id)}
                  className="eventView__header__actions--notattend"
                >
                  Cancel my place
                </div>
              </Fragment>
            ) : (
              <Fragment>
                <span className="eventView__header__actions--info">
                  You are attending this event.
                </span>
                <div
                  onClick={this.onAttendClick(event._id)}
                  className="eventView__header__actions--attend"
                >
                  I'll attend!
                </div>
              </Fragment>
            )}
          </div>
        </div>
      </div>
    );
  }
}

EventHeader.propTypes = {
  event: PropTypes.object.isRequired,
  getEventById: PropTypes.func.isRequired,
  addAttendee: PropTypes.func.isRequired,
  removeAttendee: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors,
  event: state.event,
  profile: state.profile
});

export default connect(
  mapStateToProps,
  { getEventById, addAttendee, removeAttendee }
)(EventHeader);
