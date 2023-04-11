import { useRef, useState, useEffect } from 'react';
import { showError } from 'components/Message';

//+
import { useNavigate } from 'react-router-dom';
import { addOwnRecipe, getIngredients } from 'api/queries';
//+
//-
// import { getIngredients } from 'api/queries';
//-

import { Button } from 'commonComponents/Button';
import { ButtonBlock } from './ButtonBlock';
import { SectionTitle } from 'commonComponents/SectionTitle';
import { RecipeInstructiosFields } from './RecipeInstructionsFields';
import { RecipeDescriptionFields } from './RecipeDescriptionFields';
import { ImageButton } from 'commonComponents/ImageButton';
import { IngredientList } from './IngredientList';
import { Box, TitleBox, InstructionBox, Form } from './AddRecipeForm.styled';
import { fQ } from './lib';

import image from 'images/food-blank.svg';

export const AddRecipeForm = () => {
  const [ingredientList, setIngredientList] = useState([]);
  const filePicker = useRef(null);
  const [recipeData, setRecipeData] = useState({
    instructions: '',
    title: '',
    description: '',
    thumb: null,
  });

  const [myIngredients, setMyIngredients] = useState([{}, {}, {}]);
  const [imageUrl, setImageUrl] = useState(image);

  // +
  const navigate = useNavigate();
  // +

  useEffect(() => {
    getIngredients()
      .then(data => {
        setIngredientList(data);
      })
      .catch(err => showError(err));
  }, []);

  const handlePick = () => {
    filePicker.current.click();
  };

  const onSubmit = e => {
    e.preventDefault();
    const ingredients = myIngredients.map(item => {
      return { id: item.id, measure: `${fQ(item.quantity)} ${item.unit}` };
    });

    const newData = {
      ...recipeData,
      ingredients,
    };
    // -
    // console.log(newData);
    // -

    // +
    addOwnRecipe({ ...newData })
      .then(() => {
        navigate('/my');
      })
      .catch(err => showError(err));
    // +
  };

  const handleMinus = () => {
    handleIngradientDelete(myIngredients.length - 1);
  };
  const handlePlus = () => {
    setMyIngredients([...myIngredients, {}]);
  };

  const handleIngradientDelete = idx => {
    setMyIngredients([
      ...myIngredients.slice(0, idx),
      ...myIngredients.slice(idx + 1),
    ]);
  };

  const handleFormData = ({ target: { name, value } }) => {
    setRecipeData({ ...recipeData, [name]: value });
  };

  const handleAutoinput = ({ name, value, element = null, idx = -1 }) => {
    if (idx < 0) {
      setRecipeData({ ...recipeData, [name]: value });
    } else {
      const arr = [...myIngredients];
      if (name === 'ingredient') {
        arr[idx].id = element._id;
      } else {
        arr[idx][name] = value;
      }
      setMyIngredients(arr);
    }
  };

  const handleChangeImage = ({ target: { name, files } }) => {
    setImageUrl(URL.createObjectURL(files[0]));
    setRecipeData({ ...recipeData, [name]: files[0] });
  };

  return (
    <Form onSubmit={onSubmit}>
      <Box>
        <ImageButton src={imageUrl} onClick={handlePick} />
        <input
          ref={filePicker}
          name="thumb"
          hidden
          type="file"
          accept="image/*"
          onChange={handleChangeImage}
        ></input>
        <RecipeDescriptionFields
          handleFormData={handleFormData}
          handleAutoinput={handleAutoinput}
        />
      </Box>
      <TitleBox>
        <SectionTitle>Ingredients</SectionTitle>
        <ButtonBlock
          handleMinus={handleMinus}
          handlePlus={handlePlus}
          number={myIngredients.length}
        />
      </TitleBox>

      <IngredientList
        ingredientList={ingredientList}
        myIngredients={myIngredients}
        handleIngradientDelete={handleIngradientDelete}
        handleAutoinput={handleAutoinput}
      />
      <InstructionBox>
        <TitleBox>
          <SectionTitle>Recipe preparation</SectionTitle>
        </TitleBox>
        <RecipeInstructiosFields handleFormData={handleFormData} />
        <Button
          styledButton
          // largeButton
          // greenButton
          type="submit"
          // disabled
        >
          Add
        </Button>
      </InstructionBox>
    </Form>
  );
};
