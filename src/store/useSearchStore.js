import { create } from 'zustand';

// 유저 검색 store
const useSearchStore = create((set) => ({
  name: '',
  email: '',
  setName: (name) => {
    set((state) => ({ name: name }));
  },
  setEmail: (email) => {
    set((state) => ({ email: email }));
  },
}));

export default useSearchStore;
