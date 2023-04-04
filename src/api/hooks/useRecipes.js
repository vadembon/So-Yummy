// import { recipes } from './stubs.js';
// export const useRecipes = (filter, cb) => {
//   const data = recipes;
//   cb?.onSuccess?.(data);
//   return { data, error: null, isLoading: false };
// };


import { recipes } from './stubs.js';
import { useEffect, useState } from 'react';

export const useRecipes = (filter, cb) => {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    let filteredRecipes = recipes.filter(({ category }) => category === filter.category);
    setError('');
    setData(filteredRecipes);
    setLoading(false);
    cb?.onSuccess?.(filteredRecipes);
  }, [JSON.stringify(filter)]);

  return { data, error, isLoading };
};