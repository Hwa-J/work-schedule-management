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
<<<<<<< HEAD
  setConfirmPwd: (confirmPwd) => set({ confirmPwd }),
}))
=======
  // setConfirmPassword: (confirmPassword) => set({ confirmPassword }),
}));
>>>>>>> daafc8a13689baf26f5a1ba100dcc5a056269b56

export default useRegisterStore;
