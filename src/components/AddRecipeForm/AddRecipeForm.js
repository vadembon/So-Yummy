import { useState, useRef, useEffect } from 'react';

import { useForm } from 'react-hook-form';
import { Form } from './AddRecipeForm.styled';

import { useIngredients, useCategories, useAddOwnRecipe } from 'api/hooks';

import { Button } from 'commonComponents/Button';
import { ImageButton } from 'commonComponents/ImageButton';
import { InputForm, TextForm, SelectForm } from 'commonComponents/InputForm';
import { SectionTitle } from 'commonComponents/SectionTitle';
import { AddIngredientForm } from './AddIngredientForm';
import { IngredientList } from './IngredientList';

import image from 'images/food-blank.svg';

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

export const AddRecipeForm = () => {
  const filePicker = useRef(null);
  const [categoryList, setCategoryList] = useState([]);
  const [ingredientList, setIngredientList] = useState([]);
  const [addIngredient, setAddIngredient] = useState(false);
  const [myIngredients, setMyIngredients] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(image);

  const { data: iList } = useIngredients();
  useEffect(() => {
    if (iList) {
      setIngredientList(iList);
    }
  }, [iList]);

  const { data: iCat } = useCategories();
  useEffect(() => {
    if (iCat) {
      setCategoryList(iCat);
    }
  }, [iCat]);

  const {
    mutate: saveRecipe,
    // error: errSaveRecipe,
    // isLoading: saveRecipeInProgress,
  } = useAddOwnRecipe();

  const defaultValues = {
    title: '',
    aboutRecipe: '',
  };

  const myStyle = {
    width: '40px',
    height: '40px',
    backgroundColor: 'DodgerBlue',
    fontSize: '40px',
    borderRadius: '50%',
    textAlign: 'center',
  };

  const { register, handleSubmit, reset } = useForm(defaultValues);

  // *********************
  // const getFormData = object =>
  //   Object.keys(object).reduce((formData, key) => {
  //     formData.append(key, object[key]);
  //     return formData;
  //   }, new FormData());
  // ***********************

  const onSubmit = data => {
    const ingredients = myIngredients.map(item => {
      return { id: item.id, measure: `${item.quantity} ${item.unit}` };
    });

    const newData = {
      ...data,
      ingredients,
      thumb: selectedImage,
    };

    // const formData = getFormData(newData);
    // formData.append('file', data.selectedImage);

    saveRecipe({ ...newData });
    // !errSaveRecipe && !saveRecipeInProgress
    //   ? alert('Ok')
    //   : alert('something is wrong');

    reset();
  };

  const handlePick = () => {
    filePicker.current.click();
  };

  const handleChangeImage = e => {
    setSelectedImage(e.target.files[0]);
  };

  const handleMinus = () => {
    setMyIngredients([...myIngredients.slice(0, myIngredients.length - 1)]);
  };
  const handlePlus = () => {
    setAddIngredient(true);
  };

  const handleIngredientComplite = () => {
    setAddIngredient(false);
  };
  const handleIngradientDelete = idx => {
    setMyIngredients([
      ...myIngredients.slice(0, idx),
      ...myIngredients.slice(idx + 1),
    ]);
  };
  const handleIngredientAdd = ingt => {
    if (ingt.quantity > 0) {
      const newIngt = {
        ...ingt,
        id: ingredientList[ingt.index]._id,
        ttl: ingredientList[ingt.index].ttl,
        thb: ingredientList[ingt.index].thb,
        desc: ingredientList[ingt.index].desc,
      };
      setMyIngredients([...myIngredients, newIngt]);
    }
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
          // {...register('foodImage')}
          ref={filePicker}
          name="foodImage"
          hidden
          type="file"
          accept="image/*"
          onChange={handleChangeImage}
        ></input>
        <InputForm {...register('title')} placeholder="Enter item title" />
        <TextForm
          {...register('description')}
          placeholder="Enter about recipe"
        />
        <SelectForm {...register('category', { required: true })}>
          {categoryList.map(item => (
            <option key={item._id} value={item._id}>
              {item.name}
            </option>
          ))}
        </SelectForm>
        <SelectForm {...register('time', { required: true })}>
          {times.map((item, idx) => (
            <option key={idx} value={item.t}>
              {item.t} min
            </option>
          ))}
        </SelectForm>
        <SectionTitle>Ingredients</SectionTitle>
        <div style={{ display: 'flex' }}>
          <div style={myStyle} onClick={handleMinus}>
            -
          </div>
          <div style={myStyle}> {myIngredients.length} </div>
          <div style={myStyle} onClick={handlePlus}>
            +
          </div>
        </div>

        {addIngredient && (
          <AddIngredientForm
            ingredientList={ingredientList}
            handleIngredientComplite={handleIngredientComplite}
            handleIngredientAdd={handleIngredientAdd}
          />
        )}
        {myIngredients.length !== 0 && (
          <IngredientList
            itemArray={myIngredients}
            handleIngradientDelete={handleIngradientDelete}
          />
        )}

        <SectionTitle>Recipe preparation</SectionTitle>
        <TextForm
          height="156px"
          {...register('instructions')}
          placeholder="Enter instructions"
        />
        <Button
          styledButton
          // largeButton
          // greenButton
          type="submit"
        >
          Add
        </Button>
      </Form>
    </>
  );
};
