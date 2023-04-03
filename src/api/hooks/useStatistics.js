import { useQuery } from '@tanstack/react-query';
import { getStatistics } from '../queries';

export const useStatistics = (cb = {}) => {
  const { data, error, isLoading } = useQuery({
    queryKey: ['statistics'],
    queryFn: getStatistics,
    ...cb,
  });

  return { data, error, isLoading };
};
