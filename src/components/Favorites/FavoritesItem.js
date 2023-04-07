import { ReactComponent as TrashIconSvg } from '../../images/commonSvgImg/icon-trash.svg';
import {
  FavoriteItem,
  ImageFavoriteCard,
  FavoriteCardWrapper,
  TitleWrapper,
  FavoriteTitle,
  FavoriteTrashLogo,
  FavoriteTrashBtn,
  DiscriptionFirstText,
  FavoriteBtnWrapper,
  FavoriteTime,
  BtnWrapper,
  FavoriteBtnSeeRecipe,
} from '../Favorites/FavoritesItem.styled';

export const FavoritesItem = ({
  image,
  category,
  title,
  handelDelete,
  about,
  cookingTime,
}) => {
  return (
    <FavoriteItem>
      <ImageFavoriteCard src={image} alt={category} />
      <FavoriteCardWrapper>
        <TitleWrapper>
          <FavoriteTitle>{title}</FavoriteTitle>
        </TitleWrapper>
        <FavoriteTrashLogo>
          <FavoriteTrashBtn
            type="button"
            onDelete={handelDelete}
          ></FavoriteTrashBtn>
          <TrashIconSvg />
        </FavoriteTrashLogo>

        <DiscriptionFirstText>{about}</DiscriptionFirstText>
        <FavoriteBtnWrapper>
          <FavoriteTime>{cookingTime}</FavoriteTime>
          <BtnWrapper>
            <FavoriteBtnSeeRecipe type="button">
              See reecipe
            </FavoriteBtnSeeRecipe>
          </BtnWrapper>
        </FavoriteBtnWrapper>
      </FavoriteCardWrapper>
    </FavoriteItem>
  );
};
