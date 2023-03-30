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

// export const useAuthStore = create(
//   persist((set) => ({
//     token: '',
//     setToken: (token) => set((state) => ({ token: token })),
//   })),
// );

// 새로고침해도 state 값이 초괴화 되지 않도록, persist 옵션 사용
export const useAuthStore = create(
  persist(
    (set) => ({
      token: null,
      setToken: (token) => {
        set((state) => ({ token: token }));
      },
    }),
    { name: 'access_token' },
  ),
);

export const useSearchStore = create((set) => ({
  email: '',
  setEmail: (email) => {
    set((state) => ({ email: email }));
  },
}));
