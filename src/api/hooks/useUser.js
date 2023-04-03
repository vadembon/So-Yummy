import { useQuery } from '@tanstack/react-query';
import { getUser } from '../queries/getUser';
// import { user } from './stubs.js';

export const useUser = (cb = {}) => {
  const { data, error, isLoading } = useQuery({
    queryKeys: ['user'],
    queryFn: getUser,
    ...cb,
  });

  return { data, error, isLoading };
};
