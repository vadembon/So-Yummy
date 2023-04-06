import { axios } from './init';
import { createError } from './createError';

export const deleteOwnRecipe = async id => {
  try {
    const { data } = await axios.delete(`/own-recipes/${id}`);
    return data.data;
  } catch (err) {
    throw createError(err);
  }
};
