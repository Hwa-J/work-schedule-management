import { addEventMockup } from 'api';
import { useMutation, useQueryClient } from 'react-query';

export const useAddEvent = () => {
  const queryClient = useQueryClient();

  return useMutation((addEventValue) => addEventMockup('001', addEventValue), {
    onSuccess: () => {
      queryClient.invalidateQueries(['events']);
    },
  });
};
