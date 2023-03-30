import { create } from 'zustand';

const useDeleteEventValueStore = create((set) => ({
  deleteEventValue: {},

  actions: {
    setDeleteEventValue: (value) =>
      set(() => ({
        deleteEventValue: { ...value },
      })),
    resetDeleteEventValue: () =>
      set(() => ({
        deleteEventValue: {},
      })),
  },
}));

export const useDeleteEventValue = () =>
  useDeleteEventValueStore(({ deleteEventValue }) => deleteEventValue);

export const useDeleteEventValueActions = () =>
  useDeleteEventValueStore((state) => state.actions);
