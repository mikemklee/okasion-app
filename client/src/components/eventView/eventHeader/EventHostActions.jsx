import React from "react";

import Icon from "components/common/Icon";

const EventHostActions = ({ onCancel }) => {
  return (
    <div className="eventView__header__actions">
      <span className="eventView__header__actions--info">
        You are the host of this event.
      </span>
      <div onClick={onCancel} className="eventView__header__actions--cancel">
        <Icon name="alert-triangle" />
        Cancel Event
      </div>
    </div>
  );
};

export default EventHostActions;
