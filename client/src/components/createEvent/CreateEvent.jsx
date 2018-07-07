import React, { Component } from "react";
import { Link } from "react-router-dom";

// components
import EventForm from "../forms/EventForm";

class CreateEvent extends Component {
  render() {
    return (
      <div className="createEvent">
        <Link to="/events" className="createEvent__goback">
          Go Back
        </Link>
        <h1 className="createEvent__title">Host New Event</h1>
        <h1 className="createEvent__subtitle">
          Let's fill out some information about your new event!
        </h1>
        <EventForm />
      </div>
    );
  }
}

export default CreateEvent;
