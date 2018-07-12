import React from "react";
import PropTypes from "prop-types";

// utils
import isEmpty from "utils/isEmpty";

// components
import Spinner from "components/common/Spinner";
import CommentForm from "components/forms/CommentForm";
import CommentFeed from "./CommentFeed";

const EventComments = ({ event }) => {
  if (isEmpty(event)) {
    return <Spinner />;
  } else {
    return (
      <div className="eventView__comments">
        <div className="eventView__comments--label">Comments</div>
        <CommentFeed eventId={event._id} comments={event.comments} />
        <CommentForm eventId={event._id} />
      </div>
    );
  }
};

EventComments.propTypes = {
  event: PropTypes.object.isRequired
};

export default EventComments;
