import React from "react";

const EventMain = ({ event }) => {
  return (
    <div className="eventView__main">
      <div className="eventView__main--topic">
        Category: <span>{event.topic}</span>
      </div>
      <div className="eventView__main--description">
        <h3>Event Details</h3>
        {event.description}
      </div>
    </div>
  );
};

export default EventMain;
