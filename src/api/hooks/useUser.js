import { useQuery } from '@tanstack/react-query';
import { getUser } from '../queries';
import { showError } from 'components/Message';

export const useUser = cb => {
  const { data, error, isLoading } = useQuery({
    queryKey: ['user'],
    queryFn: getUser,
    onSuccess: cb?.onSuccess,
    onError: error => {
      showError(error);
      cb?.onError();
    },
  });

  return { data, error, isLoading };
};
