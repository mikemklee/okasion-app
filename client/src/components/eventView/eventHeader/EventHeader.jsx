import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import format from "date-fns/format";

// components
import EventGuestActions from "./EventGuestActions";
import EventHostActions from "./EventHostActions";

const EventHeader = ({
  event,
  isAttending,
  isHost,
  onCancelEvent,
  onAttend,
  onCancelAttend
}) => {
  return (
    <div className="eventView__header">
      <div className="eventView__header--left">
        <div className="eventView__header__date">
          {format(event.date, "dddd")}, {format(event.date, "MMMM Do")}
        </div>
        <h1 className="eventView__header__title">{event.title}</h1>
        <Link to={`/profile/${event.user}`} className="eventView__header__host">
          <img src={event.hostPhoto} alt="host" />
          <span>Hosted by</span>
          <span>{event.host}</span>
        </Link>
      </div>
      <div className="eventView__header--right">
        <div className="eventView__header__attendees">
          {event.attendees && (
            <span>{event.attendees.length} Members Attending</span>
          )}
        </div>
        {isHost ? (
          <EventHostActions onCancel={onCancelEvent(event._id)} />
        ) : (
          <EventGuestActions
            isAttending={isAttending}
            onAttend={onAttend(event._id)}
            onCancelAttend={onCancelAttend(event._id)}
          />
        )}
      </div>
    </div>
  );
};

EventHeader.propTypes = {
  event: PropTypes.object.isRequired,
  isHost: PropTypes.bool,
  isAttending: PropTypes.bool,
  onAttend: PropTypes.func.isRequired,
  onCancelAttend: PropTypes.func.isRequired,
  onCancelEvent: PropTypes.func.isRequired
};

export default EventHeader;
