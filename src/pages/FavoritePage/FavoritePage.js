import { FavoriteTitle, FavoriteConteiner } from './FavoritePage.styled';
import { FavoriteItem } from 'components/Favorites/Favorites.styled';

const FavoritePage = () => {
  return (
    <FavoriteConteiner>
      <FavoriteTitle>Favorites</FavoriteTitle>
      <FavoriteItem />
      {/* <FavoriteList>FavoriteList</FavoriteList> */}

      {/* <div>Pagination</div> */}
    </FavoriteConteiner>
  );
};

export default FavoritePage;
