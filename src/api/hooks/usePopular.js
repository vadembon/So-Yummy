import { useQuery } from '@tanstack/react-query';
import { getPopular } from '../queries';
import { showError } from 'components/Message';

export const usePopular = cb => {
  const { data, error, isLoading } = useQuery({
    queryKey: ['recipes', 'popular'],
    queryFn: getPopular,
    onSuccess: cb?.onSuccess,
    onError: error => {
      showError(error);
      cb?.onError();
    },
  });

  return { data, error, isLoading };
};
