import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import format from "date-fns/format";

const EventFeedItem = ({ event }) => {
  return (
    <div className="eventsFeed__item">
      <div className="eventsFeed__item--hostImage">
        <img src={event.hostPhoto || `assets/user.png`} alt="host" />
      </div>
      <div className="eventsFeed__item__preview">
        <div className="eventsFeed__item__preview--hostedBy">
          Hosted by{" "}
          <span>
            <Link to={`/profile/${event.user}`}>{event.host}</Link>
          </span>
        </div>
        <Link
          className="eventsFeed__item__preview--title"
          to={`/event/${event._id}`}
        >
          {event.title}
        </Link>
        <div className="eventsFeed__item__preview--when">
          {format(event.date, "dddd")}, {format(event.date, "MMMM Do")} @{" "}
          {format(event.date, "h:mm A")}
        </div>
        <p className="eventsFeed__item__preview--description">
          {event.description}
        </p>
        <div className="eventsFeed__item__preview__attendee">
          <span>{event.attendees.length} Members Attending</span>
        </div>
      </div>
    </div>
  );
};

EventFeedItem.propTypes = {
  event: PropTypes.object.isRequired
};

export default EventFeedItem;
