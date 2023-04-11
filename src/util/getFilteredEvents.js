export const filteredEvents = (events, filter) => {
  switch (filter) {
    case '연차':
      const dayOffData = events.filter((event) => event.category === 'LEAVE');
      return dayOffData;
    case '당직':
      const watchDutyData = events.filter((event) => event.category === 'DUTY');
      return watchDutyData;
    default:
      return events;
  }
};

export const filteredMyEvents = (events, id) => {
  return events.filter((event) => event.userAccountId === id);
};
