import { useCallback } from 'react';
import {
  useEvents,
  useEventsActions,
  useFilteredEvents,
} from 'store/useEventsStore';
import { useModalsActions } from 'store/useModalStore';
import { useAddEventValueActions } from 'store/useAddEventValueStore';
import { getDateToSlashForm } from 'util/getDateToCustomForm';
import { momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'moment-timezone';
import 'react-big-calendar/lib/addons/dragAndDrop/styles.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { ToolBarComponent } from './CalendarToolBar';
import * as S from './style';
import { USER_ID } from 'api/mockup';

moment.tz.setDefault('Asia/Seoul');
const localizer = momentLocalizer(moment);

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
  const { edit, del } = useEventsActions();
  const { showAddEventNomalModal } = useModalsActions();
  const { setAddEventValue, resetAddEventValue } = useAddEventValueActions();

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

  // 달력에서 드래그로 일정 추가
  const addEvent = async ({ start, end }) => {
    // 이전 모달창에서 받은 입력값 초기화
    await resetAddEventValue();
    // 'YYYY/MM/DD' 날짜형식으로 변경
    const formatStart = getDateToSlashForm(start);
    const formatEnd = getDateToSlashForm(end);
    // 일정 추가할 날짜값 store 저장
    await setAddEventValue({ start: formatStart, end: formatEnd });
    // 일정 추가 모달창 열기
    await showAddEventNomalModal(true);
  };

  // 날짜 길이 조정, 옮기기로 일정 수정
  const editEvent = (data) => {
    // const { start, end, event } = data;
    edit(data);
  };

  // 날짜 더블클릭 일정 삭제
  const deleteEvent = (data) => {
    // user_account_id가 일치하는 것만 삭제 가능
    if (data.user_account_id !== USER_ID) return;
    // todo: 모달창으로 삭제 여부 묻기
    const answer = window.confirm('정말 삭제하시겠습니까?');
    if (answer) {
      del(data);
    }
  };

  return (
    <div>
      <S.MainCalendar
        defaultDate={moment().toDate()}
        defaultView="month"
        draggableAccessor="isDraggable"
        eventPropGetter={eventPropGetter}
        events={filteredEvents.length === 0 ? events : filteredEvents}
        localizer={localizer}
        onEventDrop={editEvent}
        onEventResize={editEvent}
        onDoubleClickEvent={deleteEvent}
        onSelectSlot={addEvent}
        resizable
        selectable
        popup
        style={{ width: 'auto', height: '80vh' }}
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
