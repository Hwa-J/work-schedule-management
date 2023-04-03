import { create } from 'zustand';

// 유저 검색 store
const useSearchStore = create((set) => ({
  id: null,
  name: '',
  email: '',
  setId: (id) => {
    set((state) => ({ id: id }));
  },
  setName: (name) => {
    set((state) => ({ name: name }));
  },
  setEmail: (email) => {
    set((state) => ({ email: email }));
  },
}));

export default useSearchStore;
