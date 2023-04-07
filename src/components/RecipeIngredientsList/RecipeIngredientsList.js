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
          ingredients.map(({ thb, _id, measure, desc }) => {
            return (
              <IngedientsItemLi key={_id}>
                <Wrap>
                  {<IngedientsImg src={thb ? thb : ''} alt="Ingredient" />}
                  <IngedientsTitle>{desc}</IngedientsTitle>
                </Wrap>
                <Wrap>
                  <IngedientsMeasure>{measure}</IngedientsMeasure>
                  <CheckBoxLabel htmlFor={desc}>
                    <IngedientsCheck type="checkbox" id={desc} />
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