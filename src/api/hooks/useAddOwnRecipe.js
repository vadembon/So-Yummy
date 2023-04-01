import { recipes } from './stubs.js';

export const useAddOwnRecipe = cb => {
  const mutate = recipe => {
    cb?.onSuccess?.(recipes[0]);
  };
  return { mutate, error: null, isLoading: false };
};
