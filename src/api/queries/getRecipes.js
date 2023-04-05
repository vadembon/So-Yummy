import { axios } from './init';
import { createError } from './createError';

export const getRecipes = async ({ queryKey }) => {
  try {
    const filter = [...queryKey].pop();
    const { data } = await axios.get('/recipes', { params: filter });
    return data.data;
  } catch (err) {
    throw createError(err);
  }
};
