import { createPortal } from 'react-dom';
import { MainPictureDiv } from './MainPicture.styled';

const mainContainer = document.querySelector('#main-bg');

const MainPicture = () => {
  return createPortal(<MainPictureDiv></MainPictureDiv>, mainContainer);
};

export default MainPicture;
