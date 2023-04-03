import { fetchMonthEvents } from 'api';
import { useQuery } from 'react-query';
import useLoggedUserStore from 'store/useLoggedUserStore';

export const useGetMonthEvents = (year, month) => {
  const id = useLoggedUserStore(({ id }) => id);
  const role = useLoggedUserStore(({ role }) => role);

  return useQuery(['events', { year, month }], () =>
    fetchMonthEvents({ id, role }, year, month),
  );
};
