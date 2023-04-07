import { useQuery } from '@tanstack/react-query';
import { getFavorite } from '../queries';
import { showError } from 'components/Message';

export const useFavorite = (filter, cb) => {
  const { data, error, isLoading } = useQuery({
    queryKey: ['recipes', 'favorite', filter],
    queryFn: getFavorite,
    keepPreviousData: true,
    onSuccess: cb?.onSuccess,
    onError: error => {
      showError(error);
      cb?.onError();
    },
  });

  return { data, error, isLoading };
};
