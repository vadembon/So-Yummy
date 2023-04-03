import { axios } from './init';
import { createError } from './createError';

export const getIngredients = async () => {
  try {
    const { data } = await axios.get('/recipes/ingredients');
    return data.data;
  } catch (err) {
    throw createError(err);
  }
};
