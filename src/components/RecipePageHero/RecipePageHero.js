import {
  SectionHero,
  SectionHeroTitle,
  SectionHeroDesc,
  SectionHeroBtn,
  TimeBlock,
  TimeText,
} from './RecipePageHero.styled';
import { BsClock } from 'react-icons/bs';
import { addFavorite } from 'api/queries';

export const RecipePageHero = ({
  title,
  description,
  favorites,
  time,
  isFavorite,
  _id,
}) => {
  const isFavoriteAdded = () => {
    if (isFavorite === true) {
      return { disabled: true };
    }
  };
  const addToFavorite = () => {
    console.log('add');
    if (isFavorite === false) {
      return addFavorite(_id);
    }
  };
  return (
    <SectionHero>
      <SectionHeroTitle children={title} />
      <SectionHeroDesc>{description}</SectionHeroDesc>
      {favorites && (
        <SectionHeroBtn
          disabled={isFavoriteAdded()}
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
    </SectionHero>
  );
};
