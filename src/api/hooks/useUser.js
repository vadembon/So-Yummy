import { useQuery } from '@tanstack/react-query';
import { getUser } from '../queries';

export const useUser = (cb = {}) => {
  const { data, error, isLoading } = useQuery({
    queryKey: ['user'],
    queryFn: getUser,
    ...cb,
  });

  return { data, error, isLoading };
};
