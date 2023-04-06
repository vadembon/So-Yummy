import { useQuery } from '@tanstack/react-query';
import { getOwnRecipes } from '../queries';

export const useOwnRecipes = (filter, cb = {}) => {
  const { data, error, isLoading } = useQuery({
    queryKey: ['recipes', 'own', filter],
    queryFn: getOwnRecipes,
    keepPreviousData: true,
    ...cb,
  });

  return { data, error, isLoading };
};
