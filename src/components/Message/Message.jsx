import { Card, Title, Text, Button } from './Message.styled';
import { IoClose } from 'react-icons/io5';

export const Message = () => {
  return (
    <Card>
      <Text>
        <Title>Wow!</Title> You have created your first shopping list!
      </Text>
      <Button>
        <IoClose size={28} />
      </Button>
    </Card>
  );
};
