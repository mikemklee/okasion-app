export const amIAttending = (myId, attendees) => {
  if (attendees !== undefined) {
    return !!attendees.find(attendee => attendee.user === myId);
  }
  return false;
};
