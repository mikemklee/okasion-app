import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import format from "date-fns/format";

// actions
import {
  getEventById,
  addAttendee,
  removeAttendee,
  deleteEvent
} from "../../actions/eventActions";

// components
import EventGuestActions from "./EventGuestActions";
import EventHostActions from "./EventHostActions";

// utils
import { amIAttending } from "../../utils/amIAttending";

class EventHeader extends Component {
  componentDidMount() {
    this.props.getEventById(this.props.eventId);
  }

  componentDidUpdate() {
    this.props.getEventById(this.props.eventId);
  }

  onAttend = id => () => {
    this.props.addAttendee(id);
    this.props.getEventById(this.props.eventId);
  };

  onCancelAttend = id => () => {
    this.props.removeAttendee(id);
    this.props.getEventById(this.props.eventId);
  };

  onCancelEvent = id => () => {
    this.props.deleteEvent(id, this.props.history);
  };

  render() {
    const { user } = this.props.auth;
    const { event } = this.props.event;
    let attending = amIAttending(user.id, event.attendees);
    let isHost = user.id === event.user;
    return (
      <div className="eventView__header">
        <div className="eventView__header--left">
          <div className="eventView__header__date">
            {format(event.date, "dddd")}, {format(event.date, "MMMM Do")}
          </div>
          <h1 className="eventView__header__title">{event.title}</h1>
          <Link
            to={`/profile/${event.user}`}
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
            {event.attendees && (
              <span>{event.attendees.length} Members Attending</span>
            )}
          </div>
          {isHost ? (
            <EventHostActions onCancel={this.onCancelEvent(event._id)} />
          ) : (
            <EventGuestActions
              attending={attending}
              onAttend={this.onAttend(event._id)}
              onCancelAttend={this.onCancelAttend(event._id)}
            />
          )}
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

export default withRouter(
  connect(
    mapStateToProps,
    { getEventById, addAttendee, removeAttendee, deleteEvent }
  )(EventHeader)
);
