import { useQuery } from '@tanstack/react-query';
import { getCategories } from '../queries';

export const useCategories = (cb = {}) => {
  const { data, error, isLoading } = useQuery({
    queryKey: ['categories'],
    queryFn: getCategories,
    ...cb,
  });

  return { data, error, isLoading };
};
