import { useCategories } from '../../api/hooks';
import { useParams } from 'react-router-dom';
import { Container } from 'components/Container/Container';
import { CategoriesList } from 'components/CategoriesList/CategoriesList';
import { BackgroundDots } from 'commonComponents/BackgroundDots/BackgroundDots';
import { RecipiesList } from 'components/RecipiesList/RecipiesList';
import { Loader } from 'components/Loader/Loader';
// import { Dot } from 'commonComponents/Dot';

export const Categories = () => {
  const { categoryName = 'Beef' } = useParams();

  const { data: categories, isLoading, isError, error } = useCategories();
  const category = categories?.find(({ name }) => name === categoryName);

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <Container>
        <BackgroundDots />

        <CategoriesList value={categoryName} categories={categories} />

        <RecipiesList categoryId={category._id} />

      </Container>
    </div>
  )
};