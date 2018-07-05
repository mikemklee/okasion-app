import React, { Component } from "react";

import EventsFeedItem from "./EventsFeedItem";

class EventFeed extends Component {
  render() {
    const { events } = this.props;
    return (
      <div className="eventsFeed">
        <div className="eventsFeed__header">
          <span className="eventsFeed__header--title">Upcoming Events</span>
        </div>
        <div className="eventsFeed__list">
          {events && events.length > 0 ? (
            events.map(event => <EventsFeedItem key={event.id} event={event} />)
          ) : (
            <div className="eventsFeed__empty">No Event.</div>
          )}
        </div>
      </div>
    );
  }
}

export default EventFeed;
