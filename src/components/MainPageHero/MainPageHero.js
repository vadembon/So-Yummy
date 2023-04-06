import ChooseYourBreakfast from 'components/ChooseYourBreakfast';
import MainPageLeaves from 'components/MainPageLeaves/MainPageLeaves';
import MainPicture from 'components/MainPageLeaves/MainPicture';
import MainSearchForm from 'components/MainSearchForm';
import { HeroSection, HeroTitle, HeroText } from './MainPageHero.styled';

const MainPageHero = () => {
  return (
    <>
      <HeroSection>
        <HeroTitle>
          So<span>Yummy</span>
        </HeroTitle>
        <HeroText>
          "What to cook?" is not only a recipe app, it is, in fact, your
          cookbook. You can add your own recipes to save them for the future.
        </HeroText>
        <ChooseYourBreakfast />
        <MainSearchForm />
        <MainPageLeaves />
        <MainPicture />
      </HeroSection>
    </>
  );
};

export default MainPageHero;
