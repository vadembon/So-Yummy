import {
  DishItem,
  DishList,
  DefaultImageContainer,
} from './RecipesList.styled';
import { DishCard } from 'components/DishCard/DishCard';

export const RecipesList = ({ items = [] }) => {
  return (
    <>
      <DishList isEmpty={items?.length === 0}>
        {items?.length === 0 ? (
          <DishItem>
            <DefaultImageContainer />
            <span>Try looking for something else..</span>
          </DishItem>
        ) : (
          items?.map(({ _id: id, title, thumb }) => (
            <DishItem key={id}>
              <DishCard id={id} title={title} image={thumb} />
            </DishItem>
          ))
        )}
      </DishList>
    </>
  );
};
