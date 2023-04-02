import { statistics } from './stubs.js';

export const useStatistics = cb => {
  const data = statistics;
  cb?.onSuccess?.(data);
  return { data, error: null, isLoading: false };
};
