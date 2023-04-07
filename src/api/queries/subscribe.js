import { axios } from './init';
import { createError } from './createError';

export const subscribe = async email => {
  try {
    const { data } = await axios.post('/user/subscribe', { email });
    return data;
  } catch (err) {
    throw createError(err);
  }
};
