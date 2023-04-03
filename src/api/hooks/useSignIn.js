import { signIn, setToken, clearToken } from 'api/queries';
import { useMutate } from './useMutate';
import { setUser } from 'redux/userSlice';
import { useDispatch } from 'react-redux';

export const useSignIn = cb => {
  const dispatch = useDispatch();

  const fn = async data => {
    clearToken();
    const { token, user } = await signIn(data);
    setToken(token);
    dispatch(setUser(token));
    return user;
  };

  return useMutate(fn, cb);
};
