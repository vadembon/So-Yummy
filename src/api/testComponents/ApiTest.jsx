import { AuthTest } from './AuthTest';
import { UserTest } from './UserTest';
import { List, Item, Title } from './ApiTest.styled';

export const ApiTest = () => {
  return (
    <List>
      <Item>
        <Title>Auth</Title>
        <AuthTest />
      </Item>
      <Item>
        <Title>User</Title>
        <UserTest />
      </Item>
    </List>
  );
};
