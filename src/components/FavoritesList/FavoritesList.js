import { useFavorite } from 'api/hooks';
import { Loader } from 'components/Loader/Loader';
import { FavoritesItem } from '../FavoritesItem/FavoritesItem';
import {
  FavoritesContainer,
  FavoritesListContent,
} from './FavoritesList.styled';

export const FavoritesList = ({ favorite }) => {
  const {
    data: recipes,
    error,
    isError,
    isLoading,
  } = useFavorite({
    favorite,
    page: 1,
    limit: 4,
  });
  if (isLoading) {
    return <Loader />;
  }
  if (isError) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <>
      <FavoritesContainer>
        <h2>Favorites</h2>
        {recipes && (
          <FavoritesListContent>
            {recipes?.map(({ _id: id, title, thumb }) => (
              <li key={id}>
                <FavoritesItem id={id} title={title} image={thumb} />
                <button>Icon</button>
              </li>
            ))}
          </FavoritesListContent>
        )}
      </FavoritesContainer>
    </>
  );
};
