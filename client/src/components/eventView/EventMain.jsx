import React from "react";
import PropTypes from "prop-types";

const EventMain = ({ event }) => {
  return (
    <div className="eventView__main">
      <div className="eventView__main--topic">
        Topic: <span>{event.topic}</span>
      </div>
      <div className="eventView__main--description">
        <h3>Event Details</h3>
        {event.description}
      </div>
    </div>
  );
};

EventMain.propTypes = {
  event: PropTypes.object.isRequired
};

export default EventMain;
