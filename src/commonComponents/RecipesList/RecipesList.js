import { DishItem, DishList } from './RecipesList.styled';
import { DishCard } from 'components/DishCard/DishCard';
import posterDefault from '../../images/search/bucket_veggies_desk_2x.png';

export const RecipesList = ({ items = [] }) => {
  return (
    <>
      <DishList>
        {items?.length === 0 ? (
          <DishItem>
            <img src={posterDefault} alt="Default" />
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
