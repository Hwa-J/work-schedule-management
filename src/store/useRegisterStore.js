import create from 'zustand'

const useRegisterStore = create((set) => ({
    id: '',
    username: '',
    email: '',
    password: '',
    confirmPwd: '',
    isPwdMatch: false,
    setId: (id) => set({ id }),
    setUsername: (username) => set({ username }),
    setEmail: (email) => set({ email }),
    setPassword: (password) => set({ password }),
    setConfirmPwd: (confirmPwd) => set({ confirmPwd }),
    setIsPwdMatch: (isPwdMatch) => set({ isPwdMatch }),
}))

export default useRegisterStore;