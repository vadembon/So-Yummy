import { recipes } from './stubs.js';
export const useFavorite = ({ page, limit }, cb) => {
  const data = recipes;
  cb?.onSuccess?.(data);
  return { data, error: null, isLoading: false };
};
