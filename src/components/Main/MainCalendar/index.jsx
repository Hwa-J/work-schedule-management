import { useCallback } from 'react';
import { useEvents, useFilteredEvents } from 'store/useEventsStore';
import { momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'moment-timezone';
import 'react-big-calendar/lib/addons/dragAndDrop/styles.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { ToolBarComponent } from './CalendarToolBar';
import * as S from './style';

moment.tz.setDefault('Asia/Seoul');
const localizer = momentLocalizer(moment);

// 데이터 재설정 (user_account_id가 일치하는 것만 드래그 가능)
// const reWriteData = INIT.map((event) => ({
//   ...event,
//   start: new Date(event.start),
//   end: new Date(event.end),

//   isDraggable: event.user_account_id === USER_ID,
//   allDay: true,
// }));

// todo: 네비게이션 클릭시 실행될 이벤트
const handleNavigation = (date, view, action) => {
  console.log(date, view, action);
  //it returns current date, view options[month,day,week,agenda] and action like prev, next or today
};
// todo: 이벤트 바 클릭시 실행될 이벤트
const handleChange = () => {
  console.log('this block code executed');
};

export const MainCalendar = () => {
  const events = useEvents();
  const filteredEvents = useFilteredEvents();

  console.log(events);
  console.log(filteredEvents);
  const eventPropGetter = useCallback(
    (event) => ({
      ...(event.isDraggable
        ? { className: 'isDraggable' }
        : { className: 'nonDraggable' }),
      ...(event.category === '당직'
        ? { className: 'red' }
        : { className: 'blue' }),
    }),
    [],
  );

  // 달력에서 드래그로 스케쥴 추가
  // const handleSelectSlot = useCallback(
  //   ({ data, start, end }) => {
  //     console.log(`data: ${data}, start: ${start}, end: ${end}`);
  //     const name = window.prompt('New Event name');
  //     if (name) {
  //       setEvents((prev) => [
  //         ...prev,
  //         { start, end: new Date(end), name, allDay: true },
  //       ]);
  //       console.log(start.getMonth(), start.getDate());
  //       console.log(end.getMonth(), end.getDate());
  //     }
  //   },
  //   [setEvents],
  // );

  // // 날짜 길이 조정
  // const onEventResize = (data) => {
  //   const { start, end, event } = data;

  //   setEvents((prev) => {
  //     prev.forEach((e) => {
  //       if (e.event_id === event.event_id) {
  //         e.start = start;
  //         e.end = end;
  //       }
  //     });
  //     return [...prev];
  //   });
  // };

  // // 날짜 옮기기
  // const onEventDrop = (data) => {
  //   const { start, end, event } = data;

  //   setEvents((prev) => {
  //     prev.forEach((e) => {
  //       if (e.event_id === event.event_id) {
  //         e.start = start;
  //         e.end = end;
  //       }
  //     });

  //     return [...prev];
  //   });
  // };

  // // 날짜 더블클릭 삭제
  // const onDoubleClickEvent = useCallback(
  //   (data) => {
  //     // user_account_id가 일치하는 것만 삭제 가능
  //     if (data.user_account_id !== USER_ID) return;

  //     // todo: 모달창으로 삭제 여부 묻기
  //     const filteredEvents = events.filter(
  //       (event) => event.event_id !== data.event_id,
  //     );
  //     console.log(filteredEvents);
  //     setEvents([...filteredEvents]);
  //   },
  //   [events],
  // );

  return (
    <div>
      <S.MainCalendar
        defaultDate={moment().toDate()}
        defaultView="month"
        draggableAccessor="isDraggable"
        eventPropGetter={eventPropGetter}
        events={filteredEvents.length === 0 ? events : filteredEvents}
        localizer={localizer}
        // onEventDrop={onEventDrop}
        // onEventResize={onEventResize}
        // onDoubleClickEvent={onDoubleClickEvent}
        // onSelectSlot={handleSelectSlot}
        resizable
        selectable
        popup
        style={{ width: '90vw', height: '70vh' }}
        views={''}
        onNavigate={handleNavigation}
        components={{
          event: EventComponent({ handleChange }),
          toolbar: ToolBarComponent,
        }}
      />
    </div>
  );
};

// design html for event tile
// 이벤트 바 커스텀
const EventComponent =
  ({ handleChange }) =>
  (props) => {
    const { event } = props;
    return (
      <S.EventBar title={event.email}>
        <h5 onClick={handleChange}>{event.name}</h5>
      </S.EventBar>
    );
  };
