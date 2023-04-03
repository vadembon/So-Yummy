import { recipes } from './stubs.js';
export const useMainRecipes = cb => {
  const data = recipes;
  cb?.onSuccess?.(data);
  return { data, error: null, isLoading: false };
};