export const useSubscribe = cb => {
  const mutate = email => {
    cb?.onSuccess?.(email);
  };
  return { mutate, error: null, isLoading: false };
};
