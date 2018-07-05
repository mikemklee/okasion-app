import React from "react";

import { Link } from "react-router-dom";
import format from "date-fns/format";

const EventFeedItem = ({ event }) => {
  return (
    <div className="eventsFeed__item">
      <div className="eventsFeed__item--hostImage">
        <img src={event.hostPhotoURL} alt="host" />
      </div>
      <div className="eventsFeed__item__preview">
        <div className="eventsFeed__item__preview--hostedBy">
          Hosted by{" "}
          <span>
            <Link to={`/profile/${event.hostUid}`}>{event.hostedBy}</Link>
          </span>
        </div>
        <Link
          className="eventsFeed__item__preview--title"
          to={`/event/${event.id}`}
        >
          {event.title}
        </Link>
        <div className="eventsFeed__item__preview--when">
          {format(event.date, "MMMM Do")} @ {format(event.date, "h:mm A")}
        </div>
        <p className="eventsFeed__item__preview--description">
          {event.description}
        </p>
        <div className="eventsFeed__item__preview__attendee">
          {event.attendees ? (
            <span>{event.attendees.length} Members Attending</span>
          ) : (
            <span>Be the first to join this event!</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventFeedItem;
