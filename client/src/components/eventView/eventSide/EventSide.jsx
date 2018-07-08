import React from "react";
import PropTypes from "prop-types";

// components
import EventWhenWhere from "./EventWhenWhere";
import EventAttendeesList from "./EventAttendeesList";

const EventSide = ({ event }) => {
  return (
    <div className="eventView__side">
      <EventWhenWhere
        date={event.date}
        address={event.address}
        coords={event.latlng}
      />
      <EventAttendeesList attendees={event.attendees} />
    </div>
  );
};

EventSide.propTypes = {
  event: PropTypes.object.isRequired
};

export default EventSide;
