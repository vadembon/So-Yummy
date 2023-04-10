import { InputForm, IngredBox } from './AddRecipeForm.styled';
import { AutoInput } from 'commonComponents/AutoInput';
import { InputBox } from 'components/AddRecipeForm/InputBox';

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

  // const defaultValues = {
  //   index: 0,
  //   quantity: 0,
  //   unit: '',
  // };

  // const [filter, setFilter] = useState('');
  // const [data, setData] = useState(defaultValues);

  // const filteredingredientList = ingredientList.filter(item =>
  //   item.ttl.toLowerCase().includes(filter.toLowerCase())
  // );

  // const handleFormData = ({ target: { name, value } }) => {
  //   setData({ ...data, [name]: value });
  // };

  // const handleFilter = e => {
  //   setFilter(e.target.value);
  // };

  // useEffect(() => {
  //   if (data.quantity && data.unit) {
  //     handleIngredientAdd(data);
  //   }
  // }, [data, handleIngredientAdd]);

  return (
    <IngredBox>
      <InputBox w="50%" h="40px">
        <AutoInput
          list={ingredientList}
          field="ttl"
          inputName="ingredient"
          handleAutoinput={handleAuto}
          select
          required
          width="300px"
        />{' '}
      </InputBox>
      <InputForm
        name="quantity"
        type="text"
        placeholder="quantity"
        onChange={handleInput}
        required
        variant="flushed"
        autoComplete="off"
        width="50px"
        height="50px"
        // fontSize="2xl"
      />
      <InputBox w="80px" h="40px">
        <AutoInput
          list={units}
          field="t"
          inputName="unit"
          handleAutoinput={handleAuto}
          select
          required
        />
      </InputBox>
    </IngredBox>
  );
};
