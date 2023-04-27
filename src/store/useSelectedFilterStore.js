import { create } from 'zustand';

const useSelectedFilters = create((set) => ({
  filter: '모두 보기',
  showMyEvents: false,
  actions: {
    setFilter: (filter) => set(() => ({ filter })),
    setShowMyEvents: (boolean) => set(() => ({ showMyEvents: boolean })),
  },
}));

export const useFilter = () => useSelectedFilters(({ filter }) => filter);
export const useShowMyEvents = () =>
  useSelectedFilters(({ showMyEvents }) => showMyEvents);
export const useSelectedFiltersActions = () =>
  useSelectedFilters((state) => state.actions);
