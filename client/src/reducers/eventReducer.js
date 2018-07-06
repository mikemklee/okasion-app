import { CREATE_EVENT, GET_EVENTS } from "../actions/types";

const initialState = {
  loading: false,
  events: [],
  event: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CREATE_EVENT:
      return {
        ...state,
        events: [action.payload, ...state.events]
      };

    case GET_EVENTS:
      return {
        ...state,
        events: action.payload,
        loading: false
      };
    default:
      return state;
  }
};
