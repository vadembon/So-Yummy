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
          <li>
            <DefaultImageContainer />
            <span>Try looking for something else..</span>
          </li>
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
