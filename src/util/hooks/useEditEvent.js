import { editEventMockup } from 'api';
import { useMutation, useQueryClient } from 'react-query';
import { getDateToSlashForm } from 'util/getDateToCustomForm';

export const useEditEvent = () => {
  const queryClient = useQueryClient();

  return useMutation(
    (editData) =>
      editEventMockup(editData.event.id, {
        start: getDateToSlashForm(editData.start),
        end: getDateToSlashForm(editData.end),
      }),
    {
      onSuccess: (data, payload) => {
        queryClient.invalidateQueries(['events']);
        // queryClient.setQueryData(['events', { id: payload.id }], data);
        // console.log(data);
      },
    },
  );
};
