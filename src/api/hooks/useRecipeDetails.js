import { recipes } from './stubs.js';
export const useRecipeDetails = (id, cb) => {
  const data = recipes[0];
  cb?.onSuccess?.(data);
  return { data, error: null, isLoading: false };
};
