import { CloseButtonStyled  } from './CloseButton.styled';
import Icon_close  from 'images/commonSvgImg/Icon_close.svg';

export const CloseButton = ({ location, onClick }) => {
  return (
    <CloseButtonStyled  location={location} type="button" onClick={onClick}>
      <svg>
        <use href={Icon_close} />
      </svg>
    </CloseButtonStyled >
  );
};
