import { deleteEvent } from 'api';
import { useMutation, useQueryClient } from 'react-query';

export const useDeleteEvent = () => {
  const queryClient = useQueryClient();

  return useMutation(
    (deletetData) => deleteEvent(deletetData.id, deletetData),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['events']);
      },
    },
  );
};
