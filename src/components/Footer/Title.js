import imgLogo from '../../images/footer/logo.svg';

import { TitleBox, Logo, TitleText } from './Footer.styled';

export const Title = () => {
  return (
    <TitleBox>
      <Logo src={imgLogo} alt="logo" />
      <TitleText>So Yummy</TitleText>
    </TitleBox>
  );
};
