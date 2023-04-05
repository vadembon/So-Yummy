import { axios } from './init';
import { createError } from './createError';

export const getRecipeDetails = async ({ queryKey }) => {
  try {
    const id = [...queryKey].pop();
    const { data } = await axios.get(`/recipes/id/${id}`);
    return data.data;
  } catch (err) {
    throw createError(err);
  }
};
