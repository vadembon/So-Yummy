import { useRef, useState, useEffect } from 'react';
//+
import { useNavigate } from 'react-router-dom';
import { addOwnRecipe, getIngredients } from 'api/queries';
//+
// -
// import { getIngredients } from 'api/queries';
// -
import { Button } from 'commonComponents/Button';
import { ButtonBlock } from './ButtonBlock';
import { SectionTitle } from 'commonComponents/SectionTitle';
import { RecipeIngredientsFields } from './RecipeIngredientsFields';
import { RecipeInstructiosFields } from './RecipeInstructionsFields';
import { RecipeDescriptionFields } from './RecipeDescriptionFields';
import { ImageButton } from 'commonComponents/ImageButton';
import { showError } from 'components/Message';

import { IngredientList } from './IngredientList';

import { Box } from './AddRecipeForm.styled';

import image from 'images/food-blank.svg';

export const AddRecipeForm = () => {
  const filePicker = useRef(null);
  const [recipeData, setRecipeData] = useState({
    instructions: '',
    title: '',
    description: '',
    thumb: null,
  });

  // +
  const navigate = useNavigate();
  // +

  const [ingredientList, setIngredientList] = useState([]);

  const [addIngredient, setAddIngredient] = useState(false);
  const [myIngredients, setMyIngredients] = useState([]);
  const [imageUrl, setImageUrl] = useState(image);

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
      return { id: item.id, measure: `${item.quantity} ${item.unit}` };
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
    setMyIngredients([...myIngredients.slice(0, myIngredients.length - 1)]);
  };
  const handlePlus = () => {
    setAddIngredient(true);
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
    setAddIngredient(false);
  };

  const handleFormData = ({ target: { name, value } }) => {
    setRecipeData({ ...recipeData, [name]: value });
  };

  const handleChangeImage = ({ target: { name, files } }) => {
    setImageUrl(URL.createObjectURL(files[0]));
    setRecipeData({ ...recipeData, [name]: files[0] });
  };

  return (
    <form onSubmit={onSubmit}>
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
        <RecipeDescriptionFields handleFormData={handleFormData} />
      </Box>
      <Box>
        <SectionTitle>Ingredients</SectionTitle>
        <ButtonBlock
          close={handleIngredientAdd}
          handleMinus={handleMinus}
          handlePlus={handlePlus}
          number={myIngredients.length}
        />
      </Box>
      {addIngredient && (
        <RecipeIngredientsFields
          ingredientList={ingredientList}
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
      <RecipeInstructiosFields handleFormData={handleFormData} />
      <Button
        styledButton
        // largeButton
        // greenButton
        type="submit"
      >
        Add
      </Button>
    </form>
  );
};
