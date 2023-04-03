import { useQuery } from '@tanstack/react-query';
import { getIngredients } from '../queries';

export const useIngredients = (cb = {}) => {
  const { data, error, isLoading } = useQuery({
    queryKey: ['ingredients'],
    queryFn: getIngredients,
    ...cb,
  });

  return { data, error, isLoading };
};
