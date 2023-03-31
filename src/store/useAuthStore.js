import { create } from 'zustand';
import { persist } from 'zustand/middleware';

// 로그인 토큰 store. 새로고침해도 state 값이 초괴화 되지 않도록 persist 옵션 사용
const useAuthStore = create(
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

export default useAuthStore;
