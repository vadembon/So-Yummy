import { logOut, clearToken } from 'api/queries';
import { useMutate } from './useMutate';
import { clearUser } from 'redux/userSlice';
import { useDispatch } from 'react-redux';

export const useLogOut = cb => {
  const dispatch = useDispatch();

  const fn = async () => {
    await logOut();
    clearToken();
    dispatch(clearUser());
  };
  return useMutate(fn, cb);
};
