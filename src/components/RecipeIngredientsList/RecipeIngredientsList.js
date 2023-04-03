import {
  AddToList,
  Container,
  Ingredients,
  IngredientsList,
  Number,
} from './RecipeIngredientsList.styled';

export const RecipeIngredientsList = () => {
  return (
    <Container>
      <IngredientsList>
        <Ingredients>Ingredients</Ingredients>
        <Number>Number</Number>
        <AddToList>Add to list</AddToList>
      </IngredientsList>
    </Container>
  );
};
