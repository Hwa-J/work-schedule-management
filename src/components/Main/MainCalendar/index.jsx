import { useCallback } from 'react';
import { useModalsActions } from 'store/useModalStore';
import { useAddEventValueActions } from 'store/useAddEventValueStore';
import { useDeleteEventValueActions } from 'store/useDeleteEventValueStore';
import { getDateToDashForm } from 'util/getDateToCustomForm';
import { momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'moment-timezone';
import 'react-big-calendar/lib/addons/dragAndDrop/styles.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { ToolBarComponent } from './CalendarToolBar';
import * as S from './style';
import { useEditEvent } from 'util/hooks/useEditEvent';
import { useGetMonthEvents } from 'util/hooks/useGetMonthEvents';
import {
  useMonth,
  useYear,
  useYearMonthActions,
} from 'store/useYearMonthStore';

moment.tz.setDefault('Asia/Seoul');
const localizer = momentLocalizer(moment);

export const MainCalendar = () => {
  const { showAddEventNomalModal, showDeleteEventModal } = useModalsActions();
  const { setAddEventValue, resetAddEventValue } = useAddEventValueActions();
  const { setDeleteEventValue } = useDeleteEventValueActions();
  // 일정 수정 서버 통신코드 가져오기
  const edit = useEditEvent();
  // 현재 캘린더의 날짜 정보 가져오기
  const year = useYear();
  const month = useMonth();
  const { getDate } = useYearMonthActions();

  // 서버에서 일정 데이터 가져오기
  const { isLoading, error, data: events } = useGetMonthEvents(year, month);
  console.log(events);

  const handleNavigation = (date) => {
    // 네비게이션 클릭시 YearMonthStore 날짜 변경
    getDate(date);
  };

  const eventPropGetter = useCallback(
    (event) => ({
      className: `
      ${event.isDraggable ? 'isDraggable' : 'nonDraggable'}
      ${event.category === 'DUTY' ? 'red' : 'blue'}`,
    }),
    [],
  );

  // 달력에서 드래그로 일정 추가
  const addEvent = async ({ start, end }) => {
    // 이전 모달창에서 받은 입력값 초기화
    await resetAddEventValue();
    // 'YYYY-MM-DD' 날짜형식으로 변경
    const formatStart = getDateToDashForm(start);
    const formatEnd = getDateToDashForm(end);
    // 일정 추가할 날짜값 store 저장
    await setAddEventValue({ start: formatStart, end: formatEnd });
    // 일정 추가 모달창 열기
    await showAddEventNomalModal(true);
  };

  // 날짜 길이 조정, 옮기기로 일정 수정
  const editEvent = (data) => {
    // 수정하기 서버 통신 실행
    edit.mutate(data);
  };

  // 날짜 더블클릭 일정 삭제
  const deleteEvent = async (data) => {
    // user id가 일치 or 관리자만 삭제 가능
    if (!data.isDraggable) return;
    await setDeleteEventValue(data);
    // 일정 삭제 확인 모달창 열기
    await showDeleteEventModal(true);
  };

  return (
    <div>
      <S.MainCalendar
        defaultDate={moment().toDate()}
        defaultView="month"
        draggableAccessor="isDraggable"
        eventPropGetter={eventPropGetter}
        events={events}
        localizer={localizer}
        onEventDrop={editEvent}
        onEventResize={editEvent}
        onDoubleClickEvent={deleteEvent}
        onSelectSlot={addEvent}
        resizable
        selectable
        popup
        views=""
        onNavigate={handleNavigation}
        components={{
          event: EventComponent,
          toolbar: ToolBarComponent,
        }}
      />
    </div>
  );
};

// 이벤트 바 커스텀
const EventComponent = (props) => {
  const { event } = props;
  return (
    <S.EventBar title={event.email}>
      <h5>{event.name}</h5>
    </S.EventBar>
  );
};
