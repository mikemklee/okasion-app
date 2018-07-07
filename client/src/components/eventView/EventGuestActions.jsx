import React, { Fragment } from "react";

const EventGuestActions = ({ attending, onAttend, onCancelAttend }) => {
  return (
    <div className="eventView__header__actions">
      {attending ? (
        <Fragment>
          <span className="eventView__header__actions--info">
            You are attending this event.
          </span>
          <div
            onClick={onCancelAttend}
            className="eventView__header__actions--notattend"
          >
            Cancel my place
          </div>
        </Fragment>
      ) : (
        <Fragment>
          <span className="eventView__header__actions--info">
            Interested in this event?
          </span>
          <div
            onClick={onAttend}
            className="eventView__header__actions--attend"
          >
            I'll attend!
          </div>
        </Fragment>
      )}
    </div>
  );
};

export default EventGuestActions;
