import { showError } from 'components/Message';
import { createError } from 'api/helpers';
import { clearToken } from 'api/queries';
import { clearUser } from 'redux/userSlice';

export const handleErrors = ({ axiosError, store, queryClient }) => {
  const error = createError(axiosError);

  if (error.status === '404') {
    document.location.replace('404');
    return;
  }

  if (Number(error.status) >= 500) {
    showError('Something went wrong. Try again later.');
    return;
  }

  if (error.status === '401' || error.status === '403') {
    clearToken();
    store.dispatch(clearUser());
    queryClient.resetQueries();
  }
  showError(error);
};
