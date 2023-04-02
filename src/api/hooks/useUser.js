import { user } from './stubs.js';
export const useUser = cb => {
  const data = user;
  cb?.onSuccess?.(data);
  return { data, error: null, isLoading: false };
};
