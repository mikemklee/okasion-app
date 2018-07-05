import React, { Component } from "react";

import events from "../../seed";

import EventsFeed from "./EventsFeed";

class EventsPage extends Component {
  render() {
    console.log(events);
    return (
      <div className="eventsPage container">
        <EventsFeed events={events} />
      </div>
    );
  }
}

export default EventsPage;
