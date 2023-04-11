import { createPortal } from 'react-dom';
import { FooterLeftBackgroundleaves } from './FooterLeftLeaves.styled';

const mainContainer = document.querySelector('#main-bg');

const FooterLeftLeaves = () => {
  return createPortal(
    <FooterLeftBackgroundleaves></FooterLeftBackgroundleaves>,
    mainContainer
  );
};

export default FooterLeftLeaves;
