import { useRecipes } from '../../api/hooks';
import { useParams } from 'react-router-dom';
import { Container } from '../../components/Container/Container';
import { CategoriesList } from 'components/CategoriesList/CategoriesList';
import {DishList, DishItem} from "./Categories.styled";
import { DishCard } from 'components/DishCard/DishCard';
import { BackgroundDots } from 'commonComponents/BackgroundDots/BackgroundDots';
// import { Dot } from 'commonComponents/Dot';

export const Categories = () => {
  const { categoryName: categoryId } = useParams();

  const { data: recipes, error, isLoading } = useRecipes({ category: categoryId });

  return <>
    <div>
      <Container>
        <BackgroundDots/>
        
        <CategoriesList value={categoryId} />

        {error && <div>{error}</div>}
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          recipes &&
          <DishList>
            {recipes?.map(({ id, title, image }) =>
              <DishItem key={id}>
                <DishCard id={id}
                  title={title}
                  image={image}/>
                {/* <img width={300} height={300} src={image} alt={title} />
                {title} */}
              </DishItem>
            )}
          </DishList>
        )}

      </Container>
    </div>
  </>;
};