import React from "react";

const EventDescription = ({ topic, description }) => {
  return (
    <div className="eventView__main__details">
      <div className="eventView__main__details--topic">
        Topic: <span>{topic}</span>
      </div>
      <div className="eventView__main__details--description">
        <h3>Event Details</h3>
        {description}
      </div>
    </div>
  );
};

export default EventDescription;
