import { create } from 'zustand';
import { persist } from 'zustand/middleware';

// 예시.  원하는 상태 추가하려면 use"명칭"Store 라는 변수로 생성하기
export const useExampleStore = create((setState) => ({
  state: '',
  changeState1() {
    setState(() => ({ state: '1' }));
  },
  changeState2() {
    setState(() => ({ state: '2' }));
  },
}));

// 로그인 토큰 store. 새로고침해도 state 값이 초괴화 되지 않도록 persist 옵션 사용
// export const useAuthStore = create(
//   persist(
//     (set) => ({
//       token: null,
//       role: null,
//       setToken: (token) => {
//         set((state) => ({ token: token }));
//       },
//       setRole: (role) => {
//         set((state) => ({ role: role }));
//       },
//     }),
//     { name: 'access_token' },
//   ),
// );

// 유저 검색 store
export const useSearchStore = create((set) => ({
  name: '',
  email: '',
  setName: (name) => {
    set((state) => ({ name: name }));
  },
  setEmail: (email) => {
    set((state) => ({ email: email }));
  },
}));
