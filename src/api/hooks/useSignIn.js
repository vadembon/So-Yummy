import { signIn, setToken, clearToken } from 'api/queries';
import { useMutate } from './useMutate';

const fn = async data => {
  clearToken();
  const { token, user } = await signIn(data);
  setToken(token);
  return user;
};

export const useSignIn = cb => useMutate(fn, cb);
