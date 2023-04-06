import { useState } from 'react';
import { InputForm, SelectForm } from 'commonComponents/InputForm';

const units = [
  { t: 'g' },
  { t: 'kg' },
  { t: 'liter' },
  { t: 'ml' },
  { t: 'tbs' },
  { t: 'tsp' },
];

const myStyle = {
  display: 'inline-block',
  width: '40px',
  height: '40px',
  backgroundColor: 'DodgerBlue',
  fontSize: '30px',
  borderRadius: '50%',
  textAlign: 'center',
  alignSelf: 'flex-end',
};

export const AddIngredientForm = ({
  ingredientList,
  handleIngredientComplite,
  handleIngredientAdd,
}) => {
  const defaultValues = {
    index: 0,
    quantity: 0,
    unit: '',
  };

  const [filter, setFilter] = useState('');
  const [data, setData] = useState(defaultValues);

  const filteredingredientList = ingredientList.filter(item =>
    item.ttl.toLowerCase().includes(filter.toLowerCase())
  );

  const handleFilter = e => {
    setFilter(e.target.value);
  };

  const handleIndex = e => {
    setData({ ...data, index: e.target.value });
  };

  const handleQuantity = e => {
    setData({ ...data, quantity: e.target.value });
  };
  const handleUnit = e => {
    setData({ ...data, unit: e.target.value });
  };

  const onSubmit = () => {
    handleIngredientAdd(data);
    handleIngredientComplite();
  };

  return (
    <>
      {' '}
      <InputForm
        type="text"
        name="filter"
        placeholder="Type something here"
        // size="lg"
        value={filter}
        variant="flushed"
        autoComplete="off"
        onChange={handleFilter}
        fontSize="2xl"
      />
      <div>
        <SelectForm
          name="index"
          onChange={handleIndex}
          required
          // multiple
          // size="20"
          // height="156px"
          // {...register('index', { required: true })}
        >
          {filteredingredientList.map((item, idx) => (
            <option key={idx} value={idx}>
              {item.ttl}
            </option>
          ))}
        </SelectForm>
        <InputForm
          // {...register('quantity')}
          name="quantity"
          type="text"
          placeholder="Type quantity here"
          onChange={handleQuantity}
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
          onChange={handleUnit}
          required
          // {...register('unit', { required: true })}
        >
          {units.map((item, idx) => (
            <option key={idx} value={item.t}>
              {item.t}
            </option>
          ))}
        </SelectForm>
      </div>
      <p type="button" style={myStyle} onClick={onSubmit}>
        Ok
      </p>
    </>
  );
};
