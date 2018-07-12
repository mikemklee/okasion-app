import React from "react";
import PropTypes from "prop-types";

import EventsFeedItem from "./EventsFeedItem";
import Spinner from "../common/Spinner";

const EventsFeed = ({ events }) => {
  return (
    <div className="eventsFeed">
      <div className="eventsFeed__header">
        <span className="eventsFeed__header--title">Upcoming Events</span>
      </div>
      <div className="eventsFeed__list">
        {events && events.length > 0 ? (
          events.map(event => <EventsFeedItem key={event._id} event={event} />)
        ) : (
          <Spinner />
        )}
      </div>
    </div>
  );
};

EventsFeed.propTypes = {
  events: PropTypes.array.isRequired
};

export default EventsFeed;
