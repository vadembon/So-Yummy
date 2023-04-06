import { useQuery } from '@tanstack/react-query';
import { getOwnRecipes } from '../queries';
import { showError } from 'components/Message';

export const useOwnRecipes = (filter, cb) => {
  const { data, error, isLoading } = useQuery({
    queryKey: ['recipes', 'own', filter],
    queryFn: getOwnRecipes,
    keepPreviousData: true,
    onSuccess: cb?.onSuccess,
    onError: error => {
      showError(error);
      cb?.onError();
    },
  });

  return { data, error, isLoading };
};
