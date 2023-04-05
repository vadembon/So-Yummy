import {
  ChooseYourBreakfastContainer,
  ChooseYourBreakfastText,
  ChooseYourBreakfastLink,
} from './ChooseYourBreakfast.styled';
import { ReactComponent as Icon } from '../../images/commonSvgImg/icon-arrow-right-black.svg';

const ChooseYourBreakfast = () => {
  return (
    <ChooseYourBreakfastContainer>
      <ChooseYourBreakfastText>
        <span>Delicious and healthy</span> way to enjoy <br />a variety of fresh
        ingredients in one satisfying meal
      </ChooseYourBreakfastText>
      <ChooseYourBreakfastLink to="/categories">
        See recipes
        <Icon width="18px" height="18px" />
      </ChooseYourBreakfastLink>
    </ChooseYourBreakfastContainer>
  );
};

export default ChooseYourBreakfast;
