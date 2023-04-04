import {
  AddToList,
  Ingredients,
  IngredientsList,
  Number,
  IngedientsListUl,
  IngedientsItemLi,
  IngedientsImg,
  Wrap,
  IngedientsTitle,
  IngedientsMeasure,
  IngedientsCheck,
  CheckBoxWrap,
  CheckBoxLabel,
  CheckMarkIcon,
} from './RecipeIngredientsList.styled';

import { Container } from 'commonComponents/Container';

export const RecipeIngredientsList = ({ ingredients }) => {
  return (
    <Container>
      <IngredientsList>
        <Ingredients>Ingredients</Ingredients>
        <Number>Number</Number>
        <AddToList>Add to list</AddToList>
      </IngredientsList>

      <IngedientsListUl>
        {ingredients &&
          ingredients.map(({ image, _id, measure, name }) => {
            return (
              <IngedientsItemLi key={_id}>
                <Wrap>
                  {<IngedientsImg src={image ? image : ''} alt="Ingredient" />}
                  <IngedientsTitle>{name}</IngedientsTitle>
                </Wrap>
                <Wrap>
                  <IngedientsMeasure>{measure}</IngedientsMeasure>
                  <CheckBoxLabel htmlFor={name}>
                    <IngedientsCheck type="checkbox" id={name} />
                    <CheckBoxWrap>
                      <CheckMarkIcon />
                    </CheckBoxWrap>
                  </CheckBoxLabel>
                </Wrap>
              </IngedientsItemLi>
            );
          })}
      </IngedientsListUl>
    </Container>
  );
};
