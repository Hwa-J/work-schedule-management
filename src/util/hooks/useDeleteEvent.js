import { deleteEventMockup } from 'api';
import { useMutation, useQueryClient } from 'react-query';

export const useDeleteEvent = () => {
  const queryClient = useQueryClient();

  return useMutation((deletetData) => deleteEventMockup(deletetData), {
    onSuccess: () => {
      queryClient.invalidateQueries(['events']);
    },
  });
};
