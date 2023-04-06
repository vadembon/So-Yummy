import { Card, Title, Text, Button, CardWrap } from './Message.styled';
import { IoClose } from 'react-icons/io5';
import { toast } from 'react-hot-toast';

export const Message = ({
  isError,
  t,
  message = 'You have created your first shopping list!',
}) => {
  return (
    <CardWrap>
      <Card>
        <Text>
          <Title isError={isError}>{isError ? 'Oops! ' : 'Wow! '}</Title>
          {message}
        </Text>
        <Button isError={isError} onClick={() => toast.dismiss(t.id)}>
          <IoClose size={28} />
        </Button>
      </Card>
    </CardWrap>
  );
};

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
