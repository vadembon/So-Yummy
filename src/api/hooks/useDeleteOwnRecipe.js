import { useMutation } from '@tanstack/react-query';
import { useQueryClient } from '@tanstack/react-query';
import { deleteOwnRecipe } from '../queries';

export const useDeleteOwnRecipe = cb => {
  const queryClient = useQueryClient();

  const { mutate, error, isLoading } = useMutation({
    mutationFn: deleteOwnRecipe,
    onSuccess: data => {
      queryClient.invalidateQueries({ queryKey: ['recipes', 'own'] });
      cb?.onSuccess?.(data);
    },
    onError: cb?.onError,
  });

  return { mutate, error, isLoading };
};
