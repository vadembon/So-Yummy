import { useState, useEffect } from 'react';
import { InputForm, SelectForm } from './AddRecipeForm.styled';

const units = [
  { t: 'g' },
  { t: 'kg' },
  { t: 'liter' },
  { t: 'ml' },
  { t: 'tbs' },
  { t: 'tsp' },
];

export const RecipeIngredientsFields = ({
  ingredientList,
  handleIngredientAdd,
}) => {
  const defaultValues = {
    index: 0,
    quantity: 0,
    unit: '',
  };

  // const [filter, setFilter] = useState('');
  const [data, setData] = useState(defaultValues);

  // const filteredingredientList = ingredientList.filter(item =>
  //   item.ttl.toLowerCase().includes(filter.toLowerCase())
  // );

  const handleFormData = ({ target: { name, value } }) => {
    setData({ ...data, [name]: value });
  };

  // const handleFilter = e => {
  //   setFilter(e.target.value);
  // };

  useEffect(() => {
    if (data.quantity && data.unit) {
      handleIngredientAdd(data);
    }
  }, [data, handleIngredientAdd]);

  return (
    <>
      {/* <InputForm
        type="text"
        name="filter"
        placeholder="Type something here"
        // size="lg"
        value={filter}
        variant="flushed"
        autoComplete="off"
        onChange={handleFilter}
        // fontSize="2xl"
      /> */}
      <div>
        <SelectForm
          name="index"
          onChange={handleFormData}
          required
          width="40%"
          // multiple
          // size="20"
          // height="156px"
          // {...register('index', { required: true })}
        >
          {ingredientList.map((item, idx) => (
            <option key={idx} value={idx}>
              {item.ttl}
            </option>
          ))}
        </SelectForm>
        <InputForm
          // {...register('quantity')}
          name="quantity"
          type="number"
          placeholder="Type quantity here"
          onChange={handleFormData}
          required
          // size="lg"
          // value={quantity}
          variant="flushed"
          autoComplete="off"
          // onChange={handleFilter}
          fontSize="2xl"
        />
        <SelectForm
          width={'150px'}
          // type="submit"
          name="unit"
          onChange={handleFormData}
          required
          // {...register('unit', { required: true })}
        >
          <option key="a" value="">
            Select please
          </option>
          {units.map((item, idx) => (
            <option key={idx} value={item.t}>
              {item.t}
            </option>
          ))}
        </SelectForm>
      </div>
    </>
  );
};
