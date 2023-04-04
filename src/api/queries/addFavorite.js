import { axios } from './init';
import { createError } from './createError';

export const addFavorite = async id => {
  try {
    const { data } = await axios.post('/recipes/favorite', { id });
    return data.data;
  } catch (err) {
    throw createError(err);
  }
};
