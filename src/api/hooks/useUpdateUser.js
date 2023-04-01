import { user } from './stubs.js';

export const useUpdateUser = cb => {
  const mutate = ({ name, avatar }) => {
    cb?.onSuccess?.(user);
  };
  return { mutate, error: null, isLoading: false };
};
