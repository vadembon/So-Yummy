import { register, setToken, clearToken } from 'api/queries';
import { useMutate } from './useMutate';

const fn = async data => {
  clearToken();
  const { token, user } = await register(data);
  setToken(token);
  return user;
};

export const useRegister = cb => useMutate(fn, cb);
