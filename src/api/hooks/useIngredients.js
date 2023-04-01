import { ingredients } from './stubs.js';
export const useIngredients = cb => {
  const data = ingredients;
  cb?.onSuccess?.(data);
  return { data, error: null, isLoading: false };
};
