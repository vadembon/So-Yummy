import { useQuery } from '@tanstack/react-query';
import { getIngredients } from '../queries';
import { showError } from 'components/Message';

export const useIngredients = cb => {
  const { data, error, isLoading } = useQuery({
    queryKey: ['ingredients'],
    queryFn: getIngredients,
    onSuccess: cb?.onSuccess,
    onError: error => {
      showError(error);
      cb?.onError();
    },
  });

  return { data, error, isLoading };
};
