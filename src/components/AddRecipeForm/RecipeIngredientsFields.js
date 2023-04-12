import { InputForm, IngredBox } from './AddRecipeForm.styled';
import { AutoInput } from './AutoInput';

import { handleKeyPress } from './lib';

const units = [
  { t: 'g' },
  { t: 'kg' },
  { t: 'liter' },
  { t: 'ml' },
  { t: 'tbs' },
  { t: 'tsp' },
];

export const RecipeIngredientsFields = ({
  idx,
  ingredientList,
  handleAutoinput,
}) => {
  const handleInput = ({ target: { name, value } }) => {
    handleAutoinput({
      name,
      value,
      idx,
      element: null,
    });
  };

  const handleAuto = item => {
    handleAutoinput({ ...item, idx });
  };

  return (
    <IngredBox>
      <AutoInput
        list={ingredientList}
        field="ttl"
        inputName="ingredient"
        handleAutoinput={handleAuto}
        required
        flexGrow={1}
        width="400px"
        height="53px"
      />
      <InputForm
        name="quantity"
        type="text"
        // placeholder="quantity"
        onChange={handleInput}
        onKeyPress={handleKeyPress}
        required
        variant="flushed"
        autoComplete="off"
        width="50px"
        height="53px"
        marginLeft={32}
      />
      <AutoInput
        list={units}
        field="t"
        inputName="unit"
        handleAutoinput={handleAuto}
        required
        width="80px"
        height="53px"
      />
    </IngredBox>
  );
};
