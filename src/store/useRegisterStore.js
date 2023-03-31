import { create } from 'zustand';

const useRegisterStore = create((set) => ({
  username: '',
  name: '',
  email: '',
  password: '',
  confirmPwd: '',
  setUsername: (username) => set({ username }),
  setName: (name) => set({ name }),
  setEmail: (email) => set({ email }),
  setPassword: (password) => set({ password }),
  setConfirmPwd: (confirmPwd) => set({ confirmPwd }),
}))

export default useRegisterStore;
