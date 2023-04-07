import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateUser } from 'api/queries';
import { showError } from 'components/Message';

export const useUpdateUser = cb => {
  const queryClient = useQueryClient();
  const { mutate, error, isLoading } = useMutation({
    mutationFn: updateUser,
    onSuccess: data => {
      queryClient.setQueryData(['user'], data);
      cb?.onSuccess?.(data);
    },
    onError: error => {
      showError(error);
      cb?.onError();
    },
  });

  return { mutate, error, isLoading };
};
