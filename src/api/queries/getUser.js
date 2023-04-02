import { axios } from './init';

export const getUser = async () => {
  try {
    const { data } = await axios.get('/user');
    return data;
  } catch (err) {
    const message = err.response?.data.message ?? err.message;
    const error = new Error(message);
    error.status = err.response?.status;
    error.code = err.code;
    throw error;
  }
};
