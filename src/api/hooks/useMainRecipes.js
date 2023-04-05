import { useQuery } from '@tanstack/react-query';
import { getMainRecipes } from '../queries';

export const useMainRecipes = (cb = {}) => {
  const { data, error, isLoading } = useQuery({
    queryKey: ['recipes', 'main'],
    queryFn: getMainRecipes,
    ...cb,
  });

  return { data, error, isLoading };
};
