import { editEvent } from 'api';
import { useMutation, useQueryClient } from 'react-query';
import { getDateToDashForm } from 'util/getDateToCustomForm';

export const useEditEvent = () => {
  const queryClient = useQueryClient();

  return useMutation(
    (editData) =>
      editEvent(editData.event.id, {
        eventId: editData.event.eventId,
        category: editData.event.category,
        start: getDateToDashForm(editData.start),
        end: getDateToDashForm(editData.end),
      }),
    {
      onSuccess: (data, payload) => {
        queryClient.invalidateQueries(['events']);
      },
    },
  );
};
