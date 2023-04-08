import { useState, useEffect } from 'react';
import { getCategories } from 'api/queries';
import { showError } from 'components/Message';
import { VBox, InputForm, TextForm, SelectForm } from './AddRecipeForm.styled';

const times = [
  { t: 5 },
  { t: 10 },
  { t: 15 },
  { t: 20 },
  { t: 30 },
  { t: 40 },
  { t: 50 },
  { t: 60 },
];

export const RecipeDescriptionFields = ({ handleFormData }) => {
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
        required
      />

      <TextForm
        name="description"
        placeholder="Enter about recipe"
        onChange={handleFormData}
        required
      />

      <SelectForm name="category" required onChange={handleFormData}>
        <option key="a" value="">
          Select please
        </option>
        {categoryList.map(item => (
          <option key={item._id} value={item.name}>
            {item.name}
          </option>
        ))}
      </SelectForm>

      <SelectForm name="time" required onChange={handleFormData}>
        <option key="a" value="">
          Select please
        </option>
        {times.map((item, idx) => (
          <option key={idx} value={item.t}>
            {item.t} min
          </option>
        ))}
      </SelectForm>
    </VBox>
  );
};
