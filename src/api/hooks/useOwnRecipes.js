import { recipes } from './stubs.js';
export const useOwnRecipes = (filter = { page: 1 }, cb) => {
  const data = recipes;
  cb?.onSuccess?.(data);
  return { data, error: null, isLoading: false };
};
