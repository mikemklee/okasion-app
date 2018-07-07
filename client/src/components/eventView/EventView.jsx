import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

// actions
import { getEventById } from "../../actions/eventActions";

// components
import Spinner from "../common/Spinner";
import EventHeader from "./EventHeader";
import EventMain from "./EventMain";
import EventSide from "./EventSide";

class EventView extends Component {
  componentDidMount() {
    if (this.props.match.params.id) {
      this.props.getEventById(this.props.match.params.id);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.event.event === null && this.props.event.loading) {
      this.props.history.push("/notFound");
    }
  }

  render() {
    const { event, loading } = this.props.event;
    const eventId = this.props.match.params.id;

    let eventContent;

    if (event === null || loading) {
      eventContent = <Spinner />;
    } else {
      eventContent = (
        <Fragment>
          <EventHeader eventId={eventId} />
          <EventMain event={event} />
          <EventSide event={event} />
        </Fragment>
      );
    }
    return <div className="eventView container">{eventContent}</div>;
  }
}

EventView.propTypes = {
  event: PropTypes.object.isRequired,
  getEventById: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  event: state.event,
  profile: state.profile
});

export default connect(
  mapStateToProps,
  { getEventById }
)(EventView);
