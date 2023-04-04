import { axios } from './init';
import { createError } from './createError';

export const getPopular = async () => {
  try {
    const { data } = await axios.get('/recipes/popular');
    return data.data;
  } catch (err) {
    throw createError(err);
  }
};
