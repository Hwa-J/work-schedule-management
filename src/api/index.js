import axios from 'axios';
import useAuthStore from 'store/useAuthStore';

//인스턴스 설정
export const instance = axios.create({
  baseURL: 'http://54.180.9.59:8080/api',
});

// 모든 request의 header에 access token 넣어주기
instance.interceptors.request.use(function (config) {
  const tokenStorage = localStorage.getItem('access_token');
  const accessToken = JSON.parse(tokenStorage).state.token;
  if (accessToken) {
    config.headers['Authorization'] = `Bearer ${accessToken}`;
  }
  return config;
});

// 일정 데이터 가져오기(mockup)
export const fetchEventsMockup = () =>
  instance.get('http://localhost:4000/events').then(({ data }) => {
    const res = data.map((event) => ({
      ...event,
      start: new Date(event.start),
      end: new Date(event.end),
      isDraggable: event.user_account_id === '001',
    }));
    return res;
  });

// 특정 달의 일정데이터 가져오기
export const fetchMonthEvents = (year, month) =>
  instance.get(`/schedules?year=${year}&month=${month}`);
// 특정 유저의 특정 달의 일정데이터 가져오기
export const fetchMonthUserEvents = (user_accountid, year, month) =>
  instance.get(
    `/schedules?userid=${user_accountid}&year=${year}&month=${month}`,
  );

// 일정 등록하기(mockup)
export const addEventMockup = (data) =>
  instance.post('http://localhost:4000/events', { ...data });

// 일정 등록하기
export const addEvent = (user_account_id, data) =>
  instance.post(`/schedules/${user_account_id}/create`, {
    user_account_id,
    category: data.category,
    start: data.start,
    end: data.end,
    name: data.name, // 실제 api 입력값 확인
    email: data.email, // 실제 api 입력값 확인
  });

// 일정 수정하기(mockup)
export const editEventMockup = (id, data) =>
  instance.patch(`http://localhost:4000/events/${id}`, {
    id,
    category: data.category,
    start: data.start,
    end: data.end,
  });

// // 일정 수정하기
export const editEvent = (user_account_id, data) =>
  instance.post(`/schedules/${user_account_id}/update`, {
    event_id: data.event_id,
    category: data.category,
    start: data.start,
    end: data.end,
    name: data.name, // 실제 api 입력값 확인
    email: data.email, // 실제 api 입력값 확인
  });

// 일정 삭제하기(mockup)
export const deleteEventMockup = (id) =>
  instance.delete(`http://localhost:4000/events/${id}`);

// 일정 삭제하기
export const deleteEvent = (user_account_id, data) =>
  instance.post(`schedule/${user_account_id}/delete`, {
    event_id: data.event_id,
  });
