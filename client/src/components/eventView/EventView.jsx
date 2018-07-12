import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

// actions
import {
  getEventById,
  addAttendee,
  removeAttendee,
  deleteEvent
} from "actions/eventActions";

// utils
import { amIAttending } from "utils/amIAttending";

// components
import Spinner from "../common/Spinner";
import EventHeader from "./eventHeader/EventHeader";
import EventMain from "./eventMain/EventMain";
import EventSide from "./eventSide/EventSide";

class EventView extends Component {
  componentDidMount() {
    this.props.getEventById(this.props.match.params.id);
  }

  componentDidUpdate() {
    this.props.getEventById(this.props.match.params.id);
  }

  onAttend = id => () => {
    this.props.addAttendee(id);
    this.props.getEventById(id);
  };

  onCancelAttend = id => () => {
    this.props.removeAttendee(id);
    this.props.getEventById(id);
  };

  onCancelEvent = id => () => {
    this.props.deleteEvent(id, this.props.history);
  };

  render() {
    const { user } = this.props.auth;
    const { event, loading } = this.props.event;

    if (!event || loading) return <Spinner />;

    let isAttending = amIAttending(user.id, event.attendees);
    let isHost = user.id === event.user;

    return (
      <div className="eventView container">
        <EventHeader
          event={event}
          isAttending={isAttending}
          isHost={isHost}
          onAttend={this.onAttend}
          onCancelAttend={this.onCancelAttend}
          onCancelEvent={this.onCancelEvent}
        />
        <EventMain event={event} />
        <EventSide event={event} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors,
  event: state.event
});

EventView.propTypes = {
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  event: PropTypes.object.isRequired,
  getEventById: PropTypes.func.isRequired,
  addAttendee: PropTypes.func.isRequired,
  removeAttendee: PropTypes.func.isRequired,
  deleteEvent: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  { getEventById, addAttendee, removeAttendee, deleteEvent }
)(EventView);
