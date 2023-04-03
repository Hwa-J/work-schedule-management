import { create } from 'zustand';
import moment from 'moment';

export const useYearMonthStore = create((set) => ({
  year: moment().year(),
  month: moment().month() + 1,
  actions: {
    getDate: (date) =>
      set(() => ({
        year: moment(date).year(),
        month: moment(date).month() + 1,
      })),
  },
}));

export const useYear = () => useYearMonthStore(({ year }) => year);
export const useMonth = () => useYearMonthStore(({ month }) => month);
export const useYearMonthActions = () =>
  useYearMonthStore((state) => state.actions);
