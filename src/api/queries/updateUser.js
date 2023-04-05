import { axios } from './init';
import { createError } from './createError';

export const updateUser = async user => {
  try {
    const { data } = await axios.patch('/user', user, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return data.data;
  } catch (err) {
    throw createError(err);
  }
};
