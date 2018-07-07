import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { getEventById } from "../../../actions/eventActions";

import CommentForm from "../../forms/CommentForm";
import CommentFeed from "./CommentFeed";
import Spinner from "../../common/Spinner";

class EventComments extends Component {
  componentDidMount() {
    this.props.getEventById(this.props.eventId);
  }

  render() {
    const { event, loading } = this.props.event;
    let eventContent;

    if (event === null || loading || Object.keys(event).length === 0) {
      eventContent = <Spinner />;
    } else {
      eventContent = (
        <Fragment>
          <div className="eventView__comments--label">Comments</div>
          <CommentFeed eventId={event._id} comments={event.comments} />
          <CommentForm eventId={event._id} />
        </Fragment>
      );
    }

    return <div className="eventView__comments">{eventContent}</div>;
  }
}

EventComments.propTypes = {
  getEventById: PropTypes.func.isRequired,
  event: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  event: state.event
});

export default connect(
  mapStateToProps,
  { getEventById }
)(EventComments);
