import { useQuery } from '@tanstack/react-query';
import { getRecipes } from '../queries';
import { showError } from 'components/Message';

export const useRecipes = (filter, cb) => {
  return useQuery({
    queryKey: ['recipes', filter],
    queryFn: getRecipes,
    keepPreviousData: true,
    onSuccess: cb?.onSuccess,
    onError: error => {
      showError(error);
      cb?.onError();
    },
  });
};
