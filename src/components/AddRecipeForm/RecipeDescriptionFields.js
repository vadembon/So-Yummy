import { useState, useEffect } from 'react';
import { getCategories } from 'api/queries';
import { showError } from 'components/Message';
import { VBox, InputForm, LabelBox, Label } from './AddRecipeForm.styled';
import { AutoInput } from './AutoInput';

const times = [
  { t: '5' },
  { t: '10' },
  { t: '15' },
  { t: '20' },
  { t: '30' },
  { t: '40' },
  { t: '50' },
  { t: '60' },
];

export const RecipeDescriptionFields = ({
  handleFormData,
  handleAutoinput,
}) => {
  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    getCategories()
      .then(data => {
        setCategoryList(data);
      })
      .catch(err => showError(err));
  }, []);

  return (
    <VBox>
      <InputForm
        name="title"
        placeholder="Enter item title"
        onChange={handleFormData}
        autoComplete="off"
        required
        height="43px"
      />
      <InputForm
        name="description"
        placeholder="Enter about recipe"
        onChange={handleFormData}
        autoComplete="off"
        required
        height="43px"
      />
      <LabelBox>
        <Label>Category</Label>
        <AutoInput
          list={categoryList}
          field="name"
          inputName="category"
          handleAutoinput={handleAutoinput}
          required
          width="123px"
          height="43px"
        />
      </LabelBox>
      <LabelBox>
        <Label>Cooking time</Label>
        <AutoInput
          list={times}
          field="t"
          addText=" min"
          inputName="time"
          handleAutoinput={handleAutoinput}
          required
          width="123px"
          height="43px"
        />
      </LabelBox>
    </VBox>
  );
};
