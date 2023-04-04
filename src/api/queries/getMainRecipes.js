import { axios } from './init';
import { createError } from './createError';

export const getMainRecipes = async () => {
  try {
    const { data } = await axios.get('/recipes/main-page');
    return data.data;
  } catch (err) {
    throw createError(err);
  }
};
