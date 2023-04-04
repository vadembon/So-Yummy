// import { useQuery } from '@tanstack/react-query';
// import { getCategories } from '../queries';

// export const useCategories = (cb = {}) => {
//   const { data, error, isLoading } = useQuery({
//     queryKey: ['categories'],
//     queryFn: getCategories,
//     ...cb,
//   });

//   return { data, error, isLoading };
// };


import { categories } from './stubs.js';
import { useEffect, useState } from 'react';
export const useCategories = cb => {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    setError('');
    setData(categories);
    setLoading(false);
    cb?.onSuccess?.(categories);
  }, []);

  return { data, error, isLoading };
};