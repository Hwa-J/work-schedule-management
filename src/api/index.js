import axios from 'axios';
import { getDateToSlashForm } from 'util/getDateToCustomForm';

const localData = localStorage.getItem('access_token');
const token = JSON.parse(localData).state.token;
const instance = axios.create({
  baseURL: 'http://54.180.9.59:8080/api',
});
// instance.defaults.headers.common['Authorization'] = token
//   ? `Bearer ${token}`
//   : null;

instance.interceptors.request.use(
  function (config) {
    config.headers['Content-Type'] = 'application/json; charset=utf-8';
    config.headers['Authorization'] = `Bearer ${token}`;
    return config;
  },
  function (error) {
    console.log(error);
    return Promise.reject(error);
  },
);

export default instance;

export const USER_DATA = JSON.parse(localStorage.getItem('user_data'));
const { id } = USER_DATA.state;

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
export const fetchMonthEvents = async (year, month) => {
  try {
    const { data } = await instance.get(
      `/schedules?year=${year}&month=${month}`,
    );
    const res = await data.map((event) => ({
      ...event,
      id: event.createdBy,
      event_id: event.eventId,
      start: new Date(getDateToSlashForm(event.start)),
      end: new Date(getDateToSlashForm(event.end)),
      isDraggable: event.createdBy === id,
    }));
    return res;
  } catch (error) {
    const { data } = await error.response;
    console.log(data);
  }
};
// 특정 유저의 특정 달의 일정데이터 가져오기
export const fetchMonthUserEvents = (user_accountid, year, month) =>
  instance.get(
    `/schedules?userid=${user_accountid}&year=${year}&month=${month}`,
  );

// 일정 등록하기(mockup)
export const addEventMockup = (data) =>
  instance.post('http://localhost:4000/events', { ...data });

// 일정 등록하기
export const addEvent = async (user_account_id, data) => {
  try {
    await instance.post(`/schedules/${user_account_id}/create`, {
      id: user_account_id,
      category: data.category,
      start: data.start,
      end: data.end,
    });
  } catch (error) {
    const { data } = (await error.response) ?? error;
    console.log(data);
  }
};

// 일정 수정하기(mockup)
export const editEventMockup = (id, data) =>
  instance.patch(`http://localhost:4000/events/${id}`, {
    id,
    category: data.category,
    start: data.start,
    end: data.end,
  });

// // 일정 수정하기
export const editEvent = async (user_account_id, data) => {
  try {
    await instance.post(`/schedules/${user_account_id}/update`, {
      event_id: data.eventId,
      category: data.category,
      start: data.start,
      end: data.end,
    });
  } catch (error) {
    const { data } = (await error.response) ?? error;
    console.log(data);
  }
};

// 일정 삭제하기(mockup)
export const deleteEventMockup = (id) =>
  instance.delete(`http://localhost:4000/events/${id}`);

// 일정 삭제하기
export const deleteEvent = async (user_account_id, data) => {
  try {
    await instance.post(`schedules/${user_account_id}/delete`, {
      event_id: data.eventId,
    });
  } catch (error) {
    const { data } = (await error.response) ?? error;
    console.log(data);
  }
};
