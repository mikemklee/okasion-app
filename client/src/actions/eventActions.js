import axios from "axios";

import {
  GET_ERRORS,
  CLEAR_ERRORS,
  GET_EVENTS,
  CREATE_EVENT,
  EVENT_LOADING
} from "./types";

// Create Event
export const createEvent = (eventData, history) => dispatch => {
  dispatch(clearErrors());
  axios
    .post("/api/events", eventData)
    .then(res => {
      dispatch({ type: CREATE_EVENT, payload: res.data });
      history.push("/events");
    })
    .catch(error =>
      dispatch({
        type: GET_ERRORS,
        payload: error.response.data
      })
    );
  console.log("sent createEvent request to server!");
};

// Get Events
export const getEvents = () => dispatch => {
  dispatch(setEventLoading());
  axios
    .get("/api/events")
    .then(res =>
      dispatch({
        type: GET_EVENTS,
        payload: res.data
      })
    )
    .catch(error =>
      dispatch({
        type: GET_EVENTS,
        payload: null
      })
    );
};

// Set loading state
export const setEventLoading = () => {
  return {
    type: EVENT_LOADING
  };
};

// Clear Errors
export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS
  };
};
