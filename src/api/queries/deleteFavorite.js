import { axios } from './init';
import { createError } from './createError';

export const deleteFavorite = async id => {
  try {
    const { data } = await axios.delete(`/recipes/favorite/${id}`);
    return data.data;
  } catch (err) {
    throw createError(err);
  }
};
