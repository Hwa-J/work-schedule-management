import { create } from 'zustand';
import { persist } from 'zustand/middleware';

// 로그인 유저 정보 store. 새로고침해도 state 값이 초괴화 되지 않도록 persist 옵션 사용
const useLoggedUserStore = create(
  persist(
    (set) => ({
      id: null,
      username: null,
      name: null,
      email: null,
      role: null,
      setId: (id) => {
        set((state) => ({ id: id }));
      },
      setUsername: (username) => {
        set((state) => ({ username: username }));
      },
      setName: (name) => {
        set((state) => ({ name: name }));
      },
      setEmail: (email) => {
        set((state) => ({ role: email }));
      },
      setRole: (role) => {
        set((state) => ({ role: role }));
      },
    }),
    { name: 'user_data' },
  ),
);

export default useLoggedUserStore;
