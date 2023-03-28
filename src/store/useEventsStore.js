import { create } from 'zustand';
import { INIT, USER_ID } from 'api/mockup';

// fetch 데이터 프론트에서 사용할 수 있도록 커스텀
// 데이터 재설정 (user_account_id가 일치하는 것만 드래그 가능)
// fetch 코드 작성시 내부에서 fetch 데이터 커스텀 후 반환 예정
const customEventsData = INIT.map((event) => ({
  ...event,
  start: new Date(event.start),
  end: new Date(event.end),
  isDraggable: event.user_account_id === USER_ID,
}));

const useEventsStore = create((set) => ({
  events: customEventsData,
  filteredEvents: [],
  actions: {
    // 일정 추가
    add: (data) =>
      set((state) => ({
        events: [...state.events, data],
      })),
    // 일정 수정
    edit: (data) =>
      set((state) => {
        const { start, end, event } = data;
        const editEvents = state.events.map((e) => {
          if (e.event_id === event.event_id) {
            e.start = start;
            e.end = end;
          }
          return e;
        });
        return { events: [...editEvents] };
      }),
    // 일정 삭제
    del: (data) =>
      set((state) => {
        const { event_id } = data;
        const filteredEvents = state.events.filter(
          (e) => e.event_id !== event_id,
        );
        return { events: [...filteredEvents] };
      }),
    // category 셀렉터에 따라 events 데이터 재계산
    filter: (value) =>
      set((state) => {
        switch (value) {
          case '모두 보기':
            return { filteredEvents: state.events };
          case '연차':
            const dayOffData = state.events.filter(
              (event) => event.category === '연차',
            );
            return { filteredEvents: dayOffData };
          case '당직':
            const watchDutyData = state.events.filter(
              (event) => event.category === '당직',
            );
            return { filteredEvents: watchDutyData };
          default:
            return { filteredEvents: state.events };
        }
      }),
    // 로그인 유저의 일정만 보기 필터
    // todo: category 셀렉터 filter와 연동
    filterMyEvents: (boolean) =>
      set((state) => {
        if (boolean) {
          return {
            filteredEvents: state.events.filter(
              (event) => event.user_account_id === USER_ID,
            ),
          };
        } else {
          return { filteredEvents: state.events };
        }
      }),
  },
}));

export const useEvents = () => useEventsStore(({ events }) => events);
export const useFilteredEvents = () =>
  useEventsStore(({ filteredEvents }) => filteredEvents);
export const useEventsActions = () => useEventsStore((state) => state.actions);
