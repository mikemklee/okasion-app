import React from "react";
import format from "date-fns/format";

import Icon from "../common/Icon";
import EventMap from "./EventMap";

const EventSide = ({ event }) => {
  return (
    <div className="eventView__side">
      <div className="eventView__side--header">When & Where</div>
      <div className="eventView__side--date">
        <Icon name="clock" />
        {format(event.date, "dddd")}, {format(event.date, "MMMM Do")}
      </div>
      <div className="eventView__side--address">
        <Icon name="map" />
        {event.address}
      </div>
      <EventMap coords={event.latlng} />
    </div>
  );
};

export default EventSide;
