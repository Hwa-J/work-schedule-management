import { addEventMockup } from 'api';
import { useMutation, useQueryClient } from 'react-query';

export const useAddEvent = () => {
  const queryClient = useQueryClient();

  return useMutation((addEventValue) => addEventMockup(addEventValue), {
    onSuccess: () => {
      queryClient.invalidateQueries(['events']);
    },
  });
};
