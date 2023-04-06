import { useQuery } from '@tanstack/react-query';
import { getCategories } from '../queries';
import { showError } from 'components/Message';

export const useCategories = cb => {
  const { data, error, isLoading } = useQuery({
    queryKey: ['categories'],
    queryFn: getCategories,
    onSuccess: cb?.onSuccess,
    onError: error => {
      showError(error);
      cb?.onError();
    },
  });

  return { data, error, isLoading };
};
