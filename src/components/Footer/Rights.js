import { RightsBox, RightsText, Span } from './Footer.styled';
// import spinach from '../../images/footer/spinach.png';
// import FooterPageBackground from '../MainPageBackground/FooterPageBackground';
export const Rights = () => {
  return (
    <RightsBox>
      <RightsText>
        <b>© 2023 All Rights Reserved.</b> <Span>Terms of Service</Span>
      </RightsText>
      {/* <FooterPageBackground /> */}
      {/* <ImgRights src={spinach} alt="spinach"></ImgRights> */}
    </RightsBox>
  );
};
