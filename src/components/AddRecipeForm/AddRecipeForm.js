import { useState, useRef, useEffect } from 'react';

import { useForm } from 'react-hook-form';
import { Form } from './AddRecipeForm.styled';

import { Button } from 'commonComponents/Button';
import { ImageButton } from 'commonComponents/ImageButton';
import { InputForm, TextForm, SelectForm } from 'commonComponents/InputForm';

import image from 'simpleImages/food-blank.svg';

import { categories, recipes } from '../../api/hooks/stubs.js';
import ingredientsTmpl from '../../simpleImages/ingredients.json';
import { PageTitle } from 'commonComponents/PageTitle';

import { IngredientList } from './IngredientList';
import { PopularList } from './PopularList';

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
const units = [
  { t: 'g' },
  { t: 'kg' },
  { t: 'liter' },
  { t: 'ml' },
  { t: 'tbs' },
  { t: 'tsp' },
];

// const options = [
//   { value: 'chocolate', label: 'Chocolate' },
//   { value: 'strawberry', label: 'Strawberry' },
//   { value: 'vanilla', label: 'Vanilla' },
// ];

const ingredientsSelect = ingredientsTmpl.map(item => {
  item.value = item.id;
  item.label = item.ttl;
  return item;
});

// const ingredientsSelect = JSON.parse(ingredients);
// console.log(ingredientsSelect);

export const AddRecipeForm = () => {
  const filePicker = useRef(null);
  const [myIngredients, setMyIngredients] = useState([]);
  const [filter, setFilter] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(image);

  const defaultValues = {
    foodImage: null,
    itemTitle: '',
    aboutRecipe: '',
    category: '',
    cookingTime: '',
    ingredients: '',
  };

  const myStyle = {
    width: '40px',
    height: '40px',
    backgroundColor: 'DodgerBlue',
    fontSize: '40px',
    borderRadius: '50%',
    textAlign: 'center',
  };

  const filteredIngredients = ingredientsSelect.filter(item =>
    item.label.toLowerCase().includes(filter.toLowerCase())
  );

  const { register, handleSubmit, reset } = useForm(defaultValues);

  const onSubmit = data => {
    // const formData = new FormData();
    // formData.append('file', data.foodImage[0]);
    // console.log(data.foodImage[0]);
    // console.log(formData);
    console.log(data);

    reset();
  };

  const hanleClick = () => {
    console.log(recipes);
  };

  const handlePick = () => {
    filePicker.current.click();
  };

  const handleChange = e => {
    setSelectedImage(e.target.files[0]);
  };
  const handleFilter = e => {
    setFilter(e.target.value);
  };
  const handleMinus = () => {
    setMyIngredients([...myIngredients.slice(0, myIngredients.length - 1)]);
    // console.log(myIngredients);
  };
  const handlePlus = () => {
    setMyIngredients([
      ...myIngredients,
      { id: myIngredients.length + 1, l: '5', k: 10 },
    ]);
    // console.log(myIngredients);
  };
  useEffect(() => {
    if (selectedImage) {
      setImageUrl(URL.createObjectURL(selectedImage));
    }
  }, [selectedImage]);

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <ImageButton src={imageUrl} onClick={handlePick} />

        <input
          {...register('foodImage')}
          ref={filePicker}
          hidden
          type="file"
          accept="image/*"
          onChange={handleChange}
        ></input>
        <InputForm {...register('itemTitle')} placeholder="Enter item title" />
        <TextForm
          {...register('aboutRecipe')}
          placeholder="Enter about recipe"
        />
        <SelectForm {...register('category', { required: true })}>
          {categories.map(item => (
            <option key={item.id} value={item.id}>
              {item.name}
            </option>
          ))}
        </SelectForm>
        <SelectForm {...register('cookingTime', { required: true })}>
          {times.map((item, idx) => (
            <option key={idx} value={item.t}>
              {item.t} min
            </option>
          ))}
        </SelectForm>
        <PageTitle>Ingredients</PageTitle>
        <div style={{ display: 'flex' }}>
          <div style={myStyle} onClick={handleMinus}>
            -
          </div>
          <div style={myStyle}> {myIngredients.length} </div>
          <div style={myStyle} onClick={handlePlus}>
            +
          </div>
        </div>
        <InputForm
          {...register('filter')}
          type="text"
          // name="filter"
          placeholder="Type something here"
          // size="lg"
          value={filter}
          variant="flushed"
          autoComplete="off"
          onChange={handleFilter}
          fontSize="2xl"
        />
        <SelectForm
          // multiple
          // size="20"
          // height="156px"
          {...register('ingredients', { required: true })}
        >
          {filteredIngredients.map(item => (
            <option key={item.label} value={item.label}>
              {item.name}
            </option>
          ))}
        </SelectForm>

        <SelectForm {...register('units', { required: true })}>
          {units.map((item, idx) => (
            <option key={idx} value={item.t}>
              {item.t}
            </option>
          ))}
        </SelectForm>

        <PageTitle>Recipe preparation</PageTitle>
        <TextForm
          height="156px"
          {...register('ingredients')}
          placeholder="Enter ingredients"
        />
        <IngredientList arrayItem={myIngredients} />
        <Button
          styledButton
          // largeButton
          type="submit"
        >
          Add
        </Button>

        <button type="button" onClick={hanleClick} width="20px" height="20px">
          TEST
        </button>
      </Form>
      <PageTitle>Popular recipe</PageTitle>
      <PopularList arrayItem={recipes} />
    </>
  );
};
