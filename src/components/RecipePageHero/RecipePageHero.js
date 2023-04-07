import { Container } from 'commonComponents/Container';
import {
  SectionHero,
  SectionHeroTitle,
  SectionHeroDesc,
  SectionHeroBtn,
  TimeBlock,
  TimeText,
} from './RecipePageHero.styled';
import { BsClock } from 'react-icons/bs';
export const RecipePageHero = ({ title, description, favorites, time }) => {
  const addToFavorite = () => {
    console.log('add');
  };
  return (
    <SectionHero>
      <Container>
        <SectionHeroTitle children={title} />
        <SectionHeroDesc>{description}</SectionHeroDesc>
        {favorites && (
          <SectionHeroBtn
            type="button"
            aria-label="Add to favorite"
            onClick={() => {
              addToFavorite();
            }}
          >
            Add to favorite recipes
          </SectionHeroBtn>
        )}
        <TimeBlock>
          <BsClock size="14px" fill="#23262A" />
          <TimeText>{time} min</TimeText>
        </TimeBlock>
      </Container>
    </SectionHero>
  );
};
