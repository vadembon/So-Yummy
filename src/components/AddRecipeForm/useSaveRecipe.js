import { useMutation } from '@tanstack/react-query';
import { addOwnRecipe } from '../../api/queries';
import { useQueryClient } from '@tanstack/react-query';
import { showError } from 'components/Message';

export const useSaveRecipe = cb => {
  const queryClient = useQueryClient();

  const { mutate, error, isLoading } = useMutation({
    mutationFn: addOwnRecipe,
    onSuccess: data => {
      queryClient.invalidateQueries({ queryKey: ['recipes', 'own'] });
      cb?.onSuccess?.(data);
    },
    onError: error => {
      showError(error);
      cb?.onError();
    },
  });

  return { mutate, error, isLoading };
};
