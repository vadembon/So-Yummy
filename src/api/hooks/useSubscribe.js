import { useMutation } from '@tanstack/react-query';
import { subscribe } from 'api/queries';

export const useSubscribe = cb => {
  const { mutate, error, isLoading } = useMutation({
    mutationFn: subscribe,
    onSuccess: cb?.onSuccess,
    onError: cb?.onError,
  });

  return { mutate, error, isLoading };
};
