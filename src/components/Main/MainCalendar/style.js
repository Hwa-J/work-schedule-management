import styled from 'styled-components';
import { Calendar } from 'react-big-calendar';
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop';

export const DnDCalendar = withDragAndDrop(Calendar);

// 이벤트 바 데이터 카테고리 값에 따른 배경 색상 지정
export const MainCalendar = styled(DnDCalendar)`
  .rbc-month-view {
    border: none;
  }
  .rbc-month-view {
    padding-top: 10px;
  }
  // 일요일, 토요일 헤더 색상
  .rbc-header {
    padding-bottom: 4px;
    &:first-child span {
      color: #ff4848;
    }
    &:last-child span {
      color: #5a5af7;
    }
  }

  // 일요일 날짜 바탕색
  .rbc-row-bg div.rbc-day-bg:first-child,
  .rbc-row div.rbc-date-cell:first-child {
    background-color: #e6e6e6;
    color: #999999;
  }
  // 전달, 다음달 날짜 바탕색
  .rbc-off-range-bg {
    background-color: #f4f4f4;
  }
  // 날짜칸
  .rbc-date-cell {
    padding-top: 5px;
  }

  // 당직 이벤트 색상
  .rbc-event.red {
    background-color: #f87688;
  }
  // 연차 이젠트 색상
  .rbc-event.blue {
    background-color: #6db2f4;
  }
`;

// 이벤트 바 커스텀
export const EventBar = styled.div`
  display: flex;
  align-items: center;
  padding: 2px;
`;
