import React from "react";

import Spinner from "../../common/Spinner";
import EventAttendee from "./EventAttendee";

const EventAttendeesList = ({ attendees }) => {
  if (!attendees) {
    return <Spinner />;
  }
  return (
    <div className="attendees">
      <div className="attendees__header">Who's attending</div>
      <div className="attendees__grid">
        {attendees.map(attendee => (
          <EventAttendee key={attendee._id} attendee={attendee} />
        ))}
      </div>
    </div>
  );
};

export default EventAttendeesList;
