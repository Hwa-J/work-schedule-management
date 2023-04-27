import { fetchMonthEvents } from 'api';
import { useCallback } from 'react';
import { useQuery } from 'react-query';
import useLoggedUserStore from 'store/useLoggedUserStore';
import { useMonth, useYear } from 'store/useYearMonthStore';
import { filteredEvents, filteredMyEvents } from 'util/getFilteredEvents';

export const useGetMonthEvents = (filter, showMyEvents) => {
  // 현재 캘린더의 날짜 정보 가져오기
  const year = useYear();
  const month = useMonth();

  const id = useLoggedUserStore(({ id }) => id);
  const role = useLoggedUserStore(({ role }) => role);

  const selectedfilter = useCallback(
    (events) => {
      if (showMyEvents) {
        const filtered =
          filter !== '모두 보기' ? filteredEvents(events, filter) : events;
        return filteredMyEvents(filtered, id);
      } else {
        return filteredEvents(events, filter);
      }
    },
    [filter, showMyEvents, id],
  );

  const { data: events } = useQuery(
    ['events', { year, month }],
    () => fetchMonthEvents({ id, role }, year, month),
    {
      select: (data) => {
        const filteredData = selectedfilter(data);
        return filteredData;
      },
    },
  );
  return { events };
};
