import create from 'zustand'

const useRegisterStore = create((set) => ({
    id: '',
    usename: '',
    email: '',
    password: '',
    // confirmPwd: '',
    setId: (id) => set({ id }),
    setUsename: (usename) => set({ usename }),
    setEmail: (email) => set({ email }),
    setPassword: (password) => set({ password }),
    // setConfirmPassword: (confirmPassword) => set({ confirmPassword }),
}))

export default useRegisterStore;