import { categories } from './stubs.js';
export const useCategories = cb => {
  const data = categories;
  cb?.onSuccess?.(data);
  return { data, error: null, isLoading: false };
};
