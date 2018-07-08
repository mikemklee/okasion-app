import React from "react";
import PropTypes from "prop-types";

// components
import EventDescription from "./EventDescription";
import EventComments from "../eventComments/EventComments";

const EventMain = ({ event }) => {
  return (
    <div className="eventView__main">
      <EventDescription topic={event.topic} description={event.description} />
      <EventComments />
    </div>
  );
};

EventMain.propTypes = {
  event: PropTypes.object.isRequired
};

export default EventMain;
