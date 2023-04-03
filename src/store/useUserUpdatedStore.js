import { create } from 'zustand';

// 유저 정보 수정 확인 store
const useUserUpdatedStore = create((set) => ({
  modified: false,
  setModified: (boolean) => {
    set((state) => ({ modified: boolean }));
  },
}));

export default useUserUpdatedStore;
