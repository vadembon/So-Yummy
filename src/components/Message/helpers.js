import { toast } from 'react-hot-toast';
import { Message } from './Message';

const style = {
  padding: 0,
  background: 'transparent',
  boxShadow: 'none',
};

export const showError = error => {
  const message = error instanceof Error ? error.message : error;
  toast(t => <Message isError t={t} message={message} />, { style });
};

export const showMessage = message => {
  toast(t => <Message t={t} message={message} />, { style });
};
