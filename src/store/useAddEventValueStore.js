const { create } = require('zustand');

const useAddEventValueStore = create((set) => ({
  addEventValue: {},
  actions: {
    setAddEventValue: (value) =>
      set((state) => ({
        addEventValue: { ...state.addEventValue, ...value },
      })),
    resetAddEventValue: () =>
      set(() => ({
        addEventValue: {},
      })),
  },
}));

export const useAddEventValue = () =>
  useAddEventValueStore(({ addEventValue }) => addEventValue);

export const useAddEventValueActions = () =>
  useAddEventValueStore((state) => state.actions);
