import { useQuery } from '@tanstack/react-query';
import { getRecipeDetails } from '../queries';

export const useRecipeDetails = (id, cb = {}) => {
  const { data, error, isLoading } = useQuery({
    queryKey: ['recipes', id],
    queryFn: getRecipeDetails,
    ...cb,
  });

  return { data, error, isLoading };
};
