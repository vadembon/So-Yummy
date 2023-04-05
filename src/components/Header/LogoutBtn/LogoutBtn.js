// import { useLogOut } from 'api/hooks/useLogOut';
import {
    Wrapper,
    Text,   
    ButtonWrapper,
    Button,
} from "./LogoutBtn.styled";

export const LogoutBtn = ({ closeModal }) => {
  const onButtonClick = () => {
    closeModal();
  };
  return (
    <Wrapper>
      <Text> Are you sure you want to log out?</Text>
      <ButtonWrapper>
        <Button onClick={onButtonClick}>Log out</Button>
        <Button status="cancel" onClick={closeModal}>Cancel</Button>
      </ButtonWrapper>
    </Wrapper>
  );
};