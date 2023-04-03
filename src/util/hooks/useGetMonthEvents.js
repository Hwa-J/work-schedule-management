import { fetchMonthEvents } from 'api';
import { useQuery } from 'react-query';

export const useGetMonthEvents = (year, month) => {
  return useQuery(['events', { year, month }], () =>
    fetchMonthEvents(year, month),
  );
};
