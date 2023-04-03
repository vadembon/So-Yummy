import { axios } from './init';

export const register = async user => {
  const { data } = await axios.post('/auth/register', user);
  return data;
};

export const signIn = async user => {
  const { data } = await axios.post('/auth/signin', user);
  return data;
};

export const logOut = async () => {
  await axios.get('/auth/logout');
};
