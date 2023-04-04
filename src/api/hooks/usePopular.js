import { useQuery } from '@tanstack/react-query';
import { getPopular } from '../queries';

export const usePopular = (cb = {}) => {
  const { data, error, isLoading } = useQuery({
    queryKey: ['recipes', 'popular'],
    queryFn: getPopular,
    ...cb,
  });

  return { data, error, isLoading };
};
