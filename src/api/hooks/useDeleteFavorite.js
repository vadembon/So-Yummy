import { useMutation } from '@tanstack/react-query';
import { deleteFavorite } from '../queries';
import { useQueryClient } from '@tanstack/react-query';

export const useDeleteFavorite = cb => {
  const queryClient = useQueryClient();

  const { mutate, error, isLoading } = useMutation({
    mutationFn: deleteFavorite,
    onSuccess: data => {
      queryClient.invalidateQueries({ queryKey: ['recipes', 'favorite'] });
      cb?.onSuccess?.(data);
    },
    onError: cb?.onError,
  });

  return { mutate, error, isLoading };
};
