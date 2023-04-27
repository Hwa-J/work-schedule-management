import { getDateToSlashForm } from 'util/getDateToCustomForm';

export const getEventsToCustomForm = (event, user) => ({
  ...event,
  // 'YYYY/MM/DD' 날짜형식으로 변경
  start: new Date(getDateToSlashForm(event.start)),
  end: new Date(getDateToSlashForm(event.end)),
  // user id가 일치 or 관리자 수정, 삭제 권한 부여
  isDraggable: event.createdBy === user.id || user.role === 'ADMIN',
});
