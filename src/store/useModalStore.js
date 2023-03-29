const { create } = require('zustand');

const useModalsStore = create((set) => ({
  addEventNomalModal: false,

  actions: {
    showAddEventNomalModal: (value) =>
      set(() => ({
        addEventNomalModal: value,
      })),
  },
}));

export const useAddModals = () =>
  useModalsStore(({ addEventNomalModal }) => addEventNomalModal);

export const useModalsActions = () => useModalsStore((state) => state.actions);
