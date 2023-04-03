import { axios } from './init';
import { createError } from './createError';

export const getStatistics = async () => {
  try {
    const { data } = await axios.get('/user/statistics');
    return data;
  } catch (err) {
    throw createError(err);
  }
};
