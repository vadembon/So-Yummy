import { useState } from 'react';

export const useMutate = (fn, cb) => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const mutate = async (...args) => {
    try {
      setIsLoading(true);
      setError(null);
      const result = await fn(...args);
      cb?.onSuccess?.(result);
    } catch (err) {
      const message = err.response?.data.message ?? err.message;
      const error = new Error(message);
      error.status = err.response?.status;
      error.code = err.code;
      setError(error);
      cb?.onError?.(error);
    }
    setIsLoading(false);
  };

  return { mutate, error, isLoading };
};
