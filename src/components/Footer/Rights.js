import { RightsBox, RightsText, Span } from './Footer.styled';
// import spinach from '../../images/footer/spinach.png';

export const Rights = () => {
  return (
    <RightsBox>
      <RightsText>
        <b>© 2023 All Rights Reserved.</b> <Span>Terms of Service</Span>
      </RightsText>
      {/* <ImgRights src={spinach} alt="spinach"></ImgRights> */}
    </RightsBox>
  );
};
