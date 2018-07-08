import React, { Component, Fragment } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

// actions
import { getEventById } from "../../../actions/eventActions";

// components
import Spinner from "../../common/Spinner";
import CommentForm from "../../forms/CommentForm";
import CommentFeed from "./CommentFeed";

class EventComments extends Component {
  componentDidMount() {
    this.props.getEventById(this.props.match.params.id);
  }

  render() {
    const { event, loading } = this.props.event;
    let commentsContent;

    if (event === null || loading || Object.keys(event).length === 0) {
      commentsContent = <Spinner />;
    } else {
      commentsContent = (
        <Fragment>
          <div className="eventView__comments--label">Comments</div>
          <CommentFeed eventId={event._id} comments={event.comments} />
          <CommentForm eventId={event._id} />
        </Fragment>
      );
    }

    return <div className="eventView__comments">{commentsContent}</div>;
  }
}

EventComments.propTypes = {
  getEventById: PropTypes.func.isRequired,
  event: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  event: state.event
});

export default withRouter(
  connect(
    mapStateToProps,
    { getEventById }
  )(EventComments)
);
