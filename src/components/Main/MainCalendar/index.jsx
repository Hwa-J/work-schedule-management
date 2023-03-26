import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'moment-timezone';
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop';
import 'react-big-calendar/lib/addons/dragAndDrop/styles.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { useCallback, useState } from 'react';
import { INIT, USER_ID } from 'api/mockup';
import { StyledEventBar } from './style';
import styled from 'styled-components';

moment.tz.setDefault('Asia/Seoul');
const localizer = momentLocalizer(moment);
export const DnDCalendar = withDragAndDrop(Calendar);

// 데이터 재설정 (user_account_id가 일치하는 것만 드래그 가능)
const reWriteData = INIT.map((event) => ({
  ...event,
  // issue: 다른 일정의 종료일 하루 전날로 표시되는 문제 생김
  // 종료일을 ui상 종료일과 데이터 사용을 위한 종료일에 대해 안내 필요
  start: new Date(event.start_date),
  end: new Date(event.end_date),

  isDraggable: event.user_account_id === USER_ID,
  allDay: true,
}));

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
  const [events, setEvents] = useState(reWriteData);
  console.log(events);
  const eventPropGetter = useCallback(
    (event) => ({
      ...(event.isDraggable
        ? { className: 'isDraggable' }
        : { className: 'nonDraggable' }),
      ...(event.category === '당직'
        ? { className: 'red' }
        : { className: 'green' }),
    }),
    [],
  );

  // 달력에서 드래그로 스케쥴 추가
  const handleSelectSlot = useCallback(
    ({ data, start, end }) => {
      console.log(`data: ${data}, start: ${start}, end: ${end}`);
      const name = window.prompt('New Event name');
      if (name) {
        setEvents((prev) => [
          ...prev,
          { start, end: new Date(end), name, allDay: true },
        ]);
        console.log(start.getMonth(), start.getDate());
        console.log(end.getMonth(), end.getDate());
      }
    },
    [setEvents],
  );

  // 날짜 길이 조정
  const onEventResize = (data) => {
    const { start, end, event } = data;

    setEvents((prev) => {
      prev.forEach((e) => {
        if (e.event_id === event.event_id) {
          e.start = start;
          e.end = end;
          // e.start_date = start;
          // e.end_date = end;
        }
      });
      return [...prev];
    });
  };

  // 날짜 옮기기
  const onEventDrop = (data) => {
    const { start, end, event } = data;

    setEvents((prev) => {
      prev.forEach((e) => {
        if (e.event_id === event.event_id) {
          e.start = start;
          e.end = end;
        }
      });

      return [...prev];
    });
  };

  return (
    <div>
      <StyledCalendar
        defaultDate={moment().toDate()}
        defaultView="month"
        draggableAccessor="isDraggable"
        eventPropGetter={eventPropGetter}
        events={events}
        localizer={localizer}
        onEventDrop={onEventDrop}
        onEventResize={onEventResize}
        // onSelectEvent={handleSelectEvent}
        onSelectSlot={handleSelectSlot}
        resizable
        selectable
        popup
        style={{ width: '90vw', height: '70vh' }}
        views={''}
        // messages={{
        //   noEventsInRange: (
        //     <div className="no-events">
        //       등록된 일정이 없습니다. <br />
        //       날짜를 이동해 주세요.
        //     </div>
        //   ),
        // }}
        onNavigate={handleNavigation}
        components={{
          event: EventComponent({ events, handleChange }),
          //data as events array and change is custom method passed into component(for perform any functionality on parent state)
          // toolbar: CustomToolbar({ data, change })
        }}
      />
    </div>
  );
};

// design html for event tile
// 이벤트 바 커스텀
const EventComponent =
  ({ events, handleChange }) =>
  (props) => {
    return (
      <StyledEventBar title={props.event.email}>
        <h5 onClick={handleChange}>{props.event.name}</h5>
      </StyledEventBar>
    );
  };

// issue: 파일 분리(style.js로 이동)시키면 에러 발생
// 이벤트 바 데이터 카테고리 값에 따른 배경 색상 지정
const StyledCalendar = styled(DnDCalendar)`
  .rbc-event.red {
    background-color: #fe3e3e;
  }
  .rbc-event.green {
    background-color: #26b026;
  }
`;
