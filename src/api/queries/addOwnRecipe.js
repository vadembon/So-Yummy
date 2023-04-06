import { axios } from './init';
import { createError } from './createError';

export const addOwnRecipe = async recipe => {
  try {
    const { data } = await axios.postForm('/own-recipes', recipe);
    return data.data;
  } catch (err) {
    throw createError(err);
  }
};
