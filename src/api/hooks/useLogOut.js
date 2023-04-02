export const useLogOut = cb => {
  const mutate = () => {
    cb?.onSuccess?.();
  };
  return { mutate, error: null, isLoading: false };
};
