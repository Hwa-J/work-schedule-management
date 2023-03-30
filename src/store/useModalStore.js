import { create } from 'zustand';

const useModalsStore = create((set) => ({
  addEventNomalModal: false,
  deleteEventModal: false,

  actions: {
    showAddEventNomalModal: (value) =>
      set(() => ({
        addEventNomalModal: value,
      })),
    showDeleteEventModal: (value) =>
      set(() => ({
        deleteEventModal: value,
      })),
  },
}));

export const useAddModals = () =>
  useModalsStore(({ addEventNomalModal }) => addEventNomalModal);
export const useDeleteModal = () =>
  useModalsStore(({ deleteEventModal }) => deleteEventModal);

export const useModalsActions = () => useModalsStore((state) => state.actions);
