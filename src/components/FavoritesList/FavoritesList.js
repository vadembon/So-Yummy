import { useFavorite, useDeleteFavorite } from 'api/hooks';
import { Loader } from 'components/Loader/Loader';
import { FavoritesItem } from '../FavoritesItem/FavoritesItem';
import {
  FavoritesContainer,
  FavoritTitle,
  FavoritesListContent,
} from './FavoritesList.styled';

export const FavoritesList = ({ favorite }) => {
  const { mutate } = useDeleteFavorite();
  const deleteRecipe = id => {
    mutate(id);
  };
  const { data: recipes, isLoading } = useFavorite({
    favorite,
    page: 1,
    limit: 4,
  });
  if (isLoading) {
    return <Loader />;
  }

  return (
    <FavoritesContainer>
      <FavoritTitle>Favorites</FavoritTitle>
      {recipes && (
        <FavoritesListContent>
          {recipes?.map(({ _id: id, title, thumb, time, description }) => (
            <FavoritesItem
              key={id}
              id={id}
              title={title}
              image={thumb}
              time={time}
              description={description}
              handleDelete={() => deleteRecipe(id)}
            />
          ))}
        </FavoritesListContent>
      )}
    </FavoritesContainer>
  );
};
