import { useQuery } from '@tanstack/react-query';
import { getStatistics } from '../queries';
import { showError } from 'components/Message';

export const useStatistics = cb => {
  const { data, error, isLoading } = useQuery({
    queryKey: ['statistics'],
    queryFn: getStatistics,
    onSuccess: cb?.onSuccess,
    onError: error => {
      showError(error);
      cb?.onError();
    },
  });

  return { data, error, isLoading };
};
