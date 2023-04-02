import { logOut, clearToken } from 'api/queries';
import { useMutate } from './useMutate';

const fn = async () => {
  await logOut();
  clearToken();
};

export const useLogOut = cb => useMutate(fn, cb);
