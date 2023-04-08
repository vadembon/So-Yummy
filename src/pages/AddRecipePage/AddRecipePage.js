import { PageBox } from 'commonComponents/PageBox';
import { Container } from 'commonComponents/Container';
import { Spinach } from 'commonComponents/Spinach';
import { AddRecipeForm } from 'components/AddRecipeForm';
import { InfoBox } from './InfoBox';
import { MainTitle, PopularRecipe, FollowUs } from 'components';
import { TitleBar } from 'commonComponents/TitleBar';

export const AddRecipePage = () => {
  return (
    <Container>
      <MainTitle>Add recipe</MainTitle>
      <TitleBar />
      <PageBox>
        <AddRecipeForm />
        <InfoBox>
          <FollowUs size={26} />
          <PopularRecipe />
        </InfoBox>
        <Spinach />
      </PageBox>
    </Container>
  );
};
