import {StyledLink1, StyledLink2, Container} from "./Welcome.styled"





export const WelcomePage = () => {
  
  // return <div>WelcomePage</div>;
  return (
    <Container>
      <StyledLink1 to="/register">Registration</StyledLink1>
      <StyledLink2 to="/signin">Sign in</StyledLink2>
      </Container>
  );
};
