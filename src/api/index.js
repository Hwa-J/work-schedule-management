import axios from 'axios';
import { getDateToSlashForm } from 'util/getDateToCustomForm';

// access 토큰 인증이 필요한 instance
export const instance = axios.create({
  baseURL: 'http://54.180.9.59:8080/api',
});

// // instance의 request header에 access token 넣어주기
instance.interceptors.request.use(
  async (config) => {
    const getToken = localStorage.getItem('access_token');
    const accessToken = JSON.parse(getToken).state.token;

    config.headers['Authorization'] = `Bearer ${accessToken}`;

    return config;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  },
);

// 모든 responese에서 토큰 만료시 재발급 해주기 => 실패
// instance.interceptors.response.use(
//   (response) => {
//     console.log('리스폰스');

//     return response;
//   },
//   async (error) => {
//     console.log(error);
//     const {
//       config,
//       response: { status },
//     } = error;
//     if (status === 400) {
//       console.log('400캐치');
//       if (error.response.data.errorCode === 1) {
//         console.log(error.response.data.errorMessage);

//         const prevRequest = config;
//         console.log(prevRequest);

//         // const setToken = useAuthStore((state) => state.setToken);
//         const { token } = useAuthStore.getState();
//         console.log(token);

//         const [cookies] = useCookies(['refresh_token']);
//         const refreshToken = await cookies.refresh_token;
//         console.log(refreshToken);

//         const { newAccessToken } = await axios
//           .post('http://54.180.9.59:8080/api/refresh', {
//             accessToken: token,
//             refreshToken: refreshToken,
//           })
//           .then((res) => {
//             return {
//               newAccessToken: res.data.accessToken,
//             };
//           })
//           .catch((err) => {
//             // 여기서도 에러 잡히면 강제 로그아웃 처리
//           });

//         // await setToken(newAccessToken);
//         prevRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;

//         return axios(prevRequest);
//       }
//     }
//     return Promise.reject(error);
//   },
// );

// 위의 방식으로는 store와 cookie에 접근이 안되서 함수 형태로 export 해주고 최상단 컴포넌트에서 실행 예정
export const setupInterceptor = (accessToken, refreshToken, setToken) => {
  instance.interceptors.response.use(
    (response) => {
      console.log('이상없이 response');

      return response;
    },
    async (error) => {
      console.log(error);
      const {
        config,
        response: { status },
      } = error;
      if (status === 400) {
        console.log('400캐치');
        // 토큰 만료 response 받았을 때,
        if (error.response.data.errorCode === 1) {
          const prevRequest = config;
          console.log(prevRequest);
          console.log(accessToken);
          console.log(refreshToken);

          // 새로운 토큰으로 재발급
          const { newAccessToken } = await axios
            .post('http://54.180.9.59:8080/api/refresh', {
              accessToken: accessToken,
              refreshToken: refreshToken,
            })
            .then((res) => {
              return {
                newAccessToken: res.data.accessToken,
              };
            })
            .catch((err) => {
              // 여기서도 에러 잡히면 강제 로그아웃 처리
              return {
                newAccessToken: null,
              };
            });

          // 새로 받은 토큰 store에 저장
          await setToken(newAccessToken);

          // 이전 요청의 헤더에 새로운 토큰 넣고
          prevRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
          console.log('인터셉트 성공');

          // 이전 요청 다시 실행
          return axios(prevRequest);
        }
      }
      return Promise.reject(error);
    },
  );
};

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
