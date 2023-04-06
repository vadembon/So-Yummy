import { useMutation } from '@tanstack/react-query';
import { subscribe } from 'api/queries';
import { showError, showMessage } from 'components/Message';

export const useSubscribe = cb => {
  const { mutate, error, isLoading } = useMutation({
    mutationFn: subscribe,
    onSuccess: () => {
      showMessage('You`ve successfully subscribed.');
      cb?.onSuccess();
    },
    onError: error => {
      showError(error);
      cb?.onError();
    },
  });

  return { mutate, error, isLoading };
};
