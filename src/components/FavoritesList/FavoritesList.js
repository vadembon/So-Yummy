import { useFavorite } from 'api/hooks';
import { Loader } from 'components/Loader/Loader';
import { FavoritesItem } from '../FavoritesItem/FavoritesItem';
import {
  FavoritesContainer,
  FavoritTitle,
  FavoritesListContent,
  FavoritesItemContent,
} from './FavoritesList.styled';

export const FavoritesList = ({ favorite }) => {
  const {
    data: recipes,
    // error,
    // isError,
    isLoading,
  } = useFavorite({
    favorite,
    page: 1,
    limit: 4,
  });
  if (isLoading) {
    return <Loader />;
  }
  // if (isError) {
  //   return <div>Error: {error.message}</div>;
  // }
  return (
    <FavoritesContainer>
      <FavoritTitle>Favorites</FavoritTitle>
      {recipes && (
        <FavoritesListContent>
          {recipes?.map(({ _id: id, title, thumb, time, description }) => (
            <FavoritesItemContent key={id}>
              <FavoritesItem
                id={id}
                title={title}
                image={thumb}
                time={time}
                description={description}
              />
            </FavoritesItemContent>
          ))}
        </FavoritesListContent>
      )}
    </FavoritesContainer>
  );
};
