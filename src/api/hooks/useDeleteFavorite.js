import { useMutation } from '@tanstack/react-query';
import { deleteFavorite } from '../queries';
import { useQueryClient } from '@tanstack/react-query';
import { showError } from 'components/Message';

export const useDeleteFavorite = cb => {
  const queryClient = useQueryClient();

  const { mutate, error, isLoading } = useMutation({
    mutationFn: deleteFavorite,
    onSuccess: data => {
      queryClient.invalidateQueries({ queryKey: ['recipes', 'favorite'] });
      cb?.onSuccess?.(data);
    },
    onError: error => {
      showError(error);
      cb?.onError();
    },
  });

  return { mutate, error, isLoading };
};
