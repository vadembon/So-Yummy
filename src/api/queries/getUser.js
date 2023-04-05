import { axios } from './init';
import { createError } from './createError';

export const getUser = async () => {
  try {
    const { data } = await axios.get('/user');
    return data.data;
  } catch (err) {
    throw createError(err);
  }
};
