import { Box } from 'commonComponents/Box';
import { Container } from 'commonComponents/Container';
import { Spinach } from 'commonComponents/Spinach';
import { AddRecipeForm } from 'components/AddRecipeForm';
import { MainTitle, PopularRecipe } from 'components';
import { SectionTitle } from 'commonComponents/SectionTitle';

export const AddRecipePage = () => {
  return (
    <Container>
      <MainTitle titleName={'Add recipe'} />
      <Box>
        <AddRecipeForm />
        <SectionTitle>Popular recipe</SectionTitle>
        <PopularRecipe />
        <Spinach />
      </Box>
    </Container>
  );
};
