// import { Link } from 'react-router-dom';
import {
  ImageFavoriteCard,
  FavoritesContentWrapper,
  FavoriteDishTitel,
  FavoriteDescription,
  FavoriteTime,
} from './FavoritesItem.styled';
import SuperBtn from 'commonComponents/SuperBtn/SuperBtn';

export const FavoritesItem = ({
  id,
  image,
  title,
  time,
  description,
  handleDelete,
}) => {
  return (
    <>
      <FavoritesContentWrapper>
        <ImageFavoriteCard src={image} alt={title} />
        <div>
          <FavoriteDishTitel to={`/recipe/${id}`}>{title}</FavoriteDishTitel>
          <FavoriteDescription>{description}</FavoriteDescription>
          <FavoriteTime>{time} min</FavoriteTime>
          <SuperBtn
            color="#22252A"
            hoverColor="#8baa36"
            title="See recipe"
            lnk
          />
        </div>
      </FavoritesContentWrapper>
    </>
  );
};
