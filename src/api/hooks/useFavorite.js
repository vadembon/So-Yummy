import { useQuery } from '@tanstack/react-query';
import { getFavorite } from '../queries';

export const useFavorite = (filter, cb = {}) => {
  const { data, error, isLoading } = useQuery({
    queryKey: ['recipes', 'favorite', filter],
    queryFn: getFavorite,
    ...cb,
  });

  return { data, error, isLoading };
};
