import { useQuery } from '@tanstack/react-query';
import { getRecipes } from '../queries';

export const useRecipes = (filter, cb = {}) => {
  return useQuery({
    queryKey: ['recipes', filter],
    queryFn: getRecipes,
    keepPreviousData: true,
    ...cb,
  });
};
