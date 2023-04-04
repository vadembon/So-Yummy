import { axios } from './init';
import { createError } from './createError';

export const getOwnRecipes = async ({ queryKey }) => {
  try {
    const filter = [...queryKey].pop();
    const { data } = await axios.get('/recipes/favorite', { params: filter });
    return data.data;
  } catch (err) {
    throw createError(err);
  }
};
