import React from "react";
import { Link } from "react-router-dom";
import format from "date-fns/format";

const EventHeader = ({ event }) => {
  return (
    <div className="eventView__header">
      <div className="eventView__header--left">
        <div className="eventView__header__date">
          {format(event.date, "dddd")}, {format(event.date, "MMMM Do")}
        </div>
        <h1 className="eventView__header__title">{event.title}</h1>
        <Link to={`/profile/${event.host}`} className="eventView__header__host">
          <img src={event.hostPhoto || `assets/user.png`} alt="host" />
          <span>
            Hosted by <strong>{event.host}</strong>
          </span>
        </Link>
      </div>
      <div className="eventView__header--right">
        <div className="eventView__header__attendees">
          {event.attendees ? (
            <span>{event.attendees.length} Members Attending</span>
          ) : (
            <span>Be the first to join this event!</span>
          )}
        </div>
        <div className="eventView__header__actions">
          <div className="eventView__header__actions--attend">I'll attend!</div>
          <div className="eventView__header__actions--notattend">Nope.</div>
        </div>
      </div>
    </div>
  );
};

export default EventHeader;
