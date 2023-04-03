import { logOut, clearToken } from 'api/queries';
import { useMutate } from './useMutate';
import { clearUser } from 'redux/userSlice';
import { useDispatch } from 'react-redux';
import { useQueryClient } from '@tanstack/react-query';

export const useLogOut = cb => {
  const dispatch = useDispatch();
  const queryClient = useQueryClient();

  const fn = async () => {
    await logOut();
    clearToken();
    dispatch(clearUser());
    queryClient.resetQueries();
  };
  return useMutate(fn, cb);
};
