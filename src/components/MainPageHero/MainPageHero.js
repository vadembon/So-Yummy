import ChooseYourBreakfast from 'components/ChooseYourBreakfast';
import MainPageLeaves from 'components/MainPageLeaves/MainPageLeaves';
import { HeroSection, HeroTitle, HeroText } from './MainPageHero.styled';

const MainPageHero = () => {
  return (
    <>
      <HeroSection>
        <HeroTitle>
          So<span>Yummy</span>
        </HeroTitle>
        <HeroText>
          "What to cook?" is not only a recipe
          <br />
          app, it is, in fact, your cookbook. You
          <br />
          can add your own recipes to save
          <br />
          them for the future.
        </HeroText>
      </HeroSection>
      <ChooseYourBreakfast />
      Search
      <MainPageLeaves />
    </>
  );
};

export default MainPageHero;
