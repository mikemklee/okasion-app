import React from "react";
import format from "date-fns/format";

import Icon from "../../common/Icon";
import EventMap from "./EventMap";

const EventWhenWhere = ({ date, address, coords }) => {
  return (
    <div className="whenwhere">
      <div className="whenwhere--header">When & Where</div>
      <div className="whenwhere--date">
        <Icon name="clock" />
        {format(date, "dddd")}, {format(date, "MMMM Do")}
      </div>
      <div className="whenwhere--address">
        <Icon name="map" />
        {address}
      </div>
      <EventMap coords={coords} />
    </div>
  );
};

export default EventWhenWhere;
