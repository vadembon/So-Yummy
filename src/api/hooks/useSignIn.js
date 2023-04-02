export const useSignIn = cb => {
  const mutate = user => {
    cb?.onSuccess?.(user);
  };
  return { mutate, error: null, isLoading: false };
};
