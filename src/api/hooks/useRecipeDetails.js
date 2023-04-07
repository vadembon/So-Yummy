import { useQuery } from '@tanstack/react-query';
import { getRecipeDetails } from '../queries';
import { showError } from 'components/Message';

export const useRecipeDetails = (id, cb) => {
  const { data, error, isLoading } = useQuery({
    queryKey: ['recipes', id],
    queryFn: getRecipeDetails,
    onSuccess: cb?.onSuccess,
    onError: error => {
      showError(error);
      cb?.onError();
    },
  });

  return { data, error, isLoading };
};
