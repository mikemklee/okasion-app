/**
 * checks whether a given user is already in the attendees list
 * @function amIAttending
 * @param {string} myId
 * @param {Array.<Object>} attendees
 * @returns {boolean}
 */
export const amIAttending = (myId, attendees) => {
  // run check when attendees list is not empty
  if (attendees !== undefined) {
    // look for a matching user id and return boolean
    return !!attendees.find(attendee => attendee.user === myId);
  }

  return false;
};
