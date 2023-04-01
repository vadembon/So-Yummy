import { recipes } from './stubs.js';

export const useDeleteOwnRecipe = cb => {
  const mutate = id => {
    cb?.onSuccess?.(recipes[0]);
  };
  return { mutate, error: null, isLoading: false };
};
