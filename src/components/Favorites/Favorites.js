// import { useFavorite } from './api/hooks';
// import { useDeleteFavorite } from './api/hooks';
import { FavoriteList, FavoriteItem } from './Favorites.styled';

const Favotite = () => {
  //   const { data, error, isLoading } = useFavorite({ page: 1, limit: 4 });
  //   const { mutate, error, isLoading } = useDeleteFavorite();
  //   mutate(id);
  return (
    <div>
      <FavoriteList>
        <FavoriteItem></FavoriteItem>
      </FavoriteList>
    </div>
  );
};

export default Favotite;
