import { axios } from './init';
import { createError } from './createError';

export const updateUser = async user => {
  try {
    const { data } = await axios.patchForm('/user', user);
    return data.data;
  } catch (err) {
    throw createError(err);
  }
};
