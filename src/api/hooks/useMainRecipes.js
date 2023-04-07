import { useQuery } from '@tanstack/react-query';
import { getMainRecipes } from '../queries';
import { showError } from 'components/Message';

export const useMainRecipes = cb => {
  const { data, error, isLoading } = useQuery({
    queryKey: ['recipes', 'main'],
    queryFn: getMainRecipes,
    onSuccess: cb?.onSuccess,
    onError: error => {
      showError(error);
      cb?.onError();
    },
  });

  return { data, error, isLoading };
};
