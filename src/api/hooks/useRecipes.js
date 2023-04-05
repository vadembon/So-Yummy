import { useQuery } from '@tanstack/react-query';
import { getRecipes } from '../queries';

export const useRecipes = (filter, cb = {}) => {
  const { data, error, isLoading } = useQuery({
    queryKey: ['recipes', filter],
    queryFn: getRecipes,
    keepPreviousData: true,
    ...cb,
  });

  return { data, error, isLoading };
};
