import styled from 'styled-components';
import { Calendar } from 'react-big-calendar';
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop';

export const DnDCalendar = withDragAndDrop(Calendar);

// 이벤트 바 데이터 카테고리 값에 따른 배경 색상 지정
export const MainCalendar = styled(DnDCalendar)`
  .rbc-event.red {
    background-color: #fe3e3e;
  }
  .rbc-event.green {
    background-color: #26b026;
  }
`;

// 이벤트 바 커스텀
export const EventBar = styled.div`
  display: flex;
  align-items: center;
  padding: 4px;
`;
