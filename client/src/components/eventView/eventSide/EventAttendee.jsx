import React from "react";
import { Link } from "react-router-dom";
import format from "date-fns/format";

const EventAttendee = ({ attendee }) => {
  return (
    <Link to={`/profile/${attendee.user}`} className="attendees__grid__item">
      <img
        className="attendees__grid__item--avatar"
        src={attendee.avatar}
        alt="attendee"
      />
      <span className="attendees__grid__item--name">{attendee.name}</span>
      <span className="attendees__grid__item--date">
        {format(attendee.date, "MMMM Do")} - {format(attendee.date, "hh:mm A")}
      </span>
    </Link>
  );
};

export default EventAttendee;
