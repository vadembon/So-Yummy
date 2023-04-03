import { axios } from './init';
import { createError } from './createError';

export const getCategories = async () => {
  try {
    const { data } = await axios.get('/recipes/categories');
    return data.data;
  } catch (err) {
    throw createError(err);
  }
};
