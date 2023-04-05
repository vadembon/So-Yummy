import { useEffect, useState } from 'react';
import { useParams /* useLocation, Link */ } from 'react-router-dom';
// import axios from 'axios';

import { RecipeIngredientsList } from 'components/RecipeIngredientsList';
import { RecipePageHero } from 'components/RecipePageHero';
import { RecipePreparation } from 'components/RecipePreparation';

const getRecipeById = async id => {};

export const RecipePage = () => {
  const { recipeId } = useParams();
  const [recipe, setRecipe] = useState([]);

  useEffect(() => {
    async function getRecipe() {
      try {
        const { recipe } = await getRecipeById(recipeId);
        const resipeResult = recipe[0];
        if (!resipeResult) {
          return;
        }
        setRecipe(resipeResult);
      } catch (error) {
        console.error('Something went wrong! Please try again.');
      }
    }
    getRecipe();
  }, [recipeId]);

  const {
    title,
    description,
    favorites,
    time,
    instructions,
    thumb,
    ingredients,
  } = recipe;

  return (
    <div>
      <RecipePageHero
        title={title}
        description={description}
        favorites={favorites}
        time={time}
      ></RecipePageHero>
      <RecipeIngredientsList ingredients={ingredients}></RecipeIngredientsList>
      <RecipePreparation
        description={instructions}
        foto={thumb}
      ></RecipePreparation>
    </div>
  );
};
