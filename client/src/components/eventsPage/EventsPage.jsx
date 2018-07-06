import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { getEvents } from "../../actions/eventActions";

import Spinner from "../common/Spinner";
import EventsFeed from "./EventsFeed";

class EventsPage extends Component {
  componentDidMount() {
    this.props.getEvents();
  }
  render() {
    const { events, loading } = this.props.event;

    let eventContent;
    if (events === null || loading) {
      eventContent = <Spinner />;
    } else {
      eventContent = <EventsFeed events={events} />;
    }
    return <div className="eventsPage container">{eventContent}</div>;
  }
}

EventsPage.propTypes = {
  event: PropTypes.object.isRequired,
  getEvents: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  event: state.event
});

export default connect(
  mapStateToProps,
  { getEvents }
)(EventsPage);
