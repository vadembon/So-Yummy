import { createPortal } from 'react-dom';
import { FooterRightBackgroundleaves } from './FooterRightLeaves.styled';

const mainContainer = document.querySelector('#main-bg');

const FooterRightLeaves = () => {
  return createPortal(
    <FooterRightBackgroundleaves></FooterRightBackgroundleaves>,
    mainContainer
  );
};

export default FooterRightLeaves;
