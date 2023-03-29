import moment from 'moment';

// 'YYYY/MM/DD' 형식으로 바꿔 반환
export function getDateToSlashForm(date) {
  return moment(date).format('YYYY/MM/DD');
}
// 'YYYY-MM-DD' 형식으로 바꿔 반환
export function getDateToDashForm(date) {
  return moment(date).format('YYYY-MM-DD');
}
// 입력 날짜의 하루 전 날짜를 'YYYY-MM-DD'형식으로 반환
export function getPrevDateToDashForm(date) {
  return moment(date, 'YYYY-MM-DD').subtract(1, 'days').format('YYYY-MM-DD');
}
