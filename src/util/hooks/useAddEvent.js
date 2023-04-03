import { addEvent } from 'api';
import { useMutation, useQueryClient } from 'react-query';

export const useAddEvent = () => {
  const queryClient = useQueryClient();

  return useMutation(({ id, addEventValue }) => addEvent(id, addEventValue), {
    onSuccess: () => {
      queryClient.invalidateQueries(['events']);
    },
  });
};
