import { DishItem, DishList } from './RecipesList.styled';
import { DishCard } from 'components/DishCard/DishCard';

export const RecipesList = ({ items = [] }) => {
  return (
    <>
      <DishList>
        {items?.map(({ _id: id, title, thumb }) => (
          <DishItem key={id}>
            <DishCard id={id} title={title} image={thumb} />
          </DishItem>
        ))}
      </DishList>
    </>
  );
};
