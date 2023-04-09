import { useParams } from 'react-router-dom';
import { useRecipeDetails } from 'api/hooks';

import { RecipeIngredientsList } from 'components/RecipeIngredientsList';
import { RecipePageHero } from 'components/RecipePageHero';
import { RecipePreparation } from 'components/RecipePreparation';
import { Loader } from 'components/Loader';

export const RecipePage = () => {
  const { recipeId } = useParams();
  const recipe = useRecipeDetails(recipeId);

  if (recipe.isLoading) {
    return <Loader></Loader>;
  }

  if (recipe.data) {
    /* const {
      title,
      description,
      favorites,
      time,
      instructions,
      thumb,
      ingredients,
    } = recipe.data; */

    //  console.log(recipe.data[0].ingredients);

    return (
      <div>
        <RecipePageHero
          title={recipe.data[0].title}
          description={recipe.data[0].description}
          favorites={recipe.data[0].favorites}
          time={recipe.data[0].time}
        ></RecipePageHero>
        <RecipeIngredientsList
          ingredients={recipe.data[0].ingredients}
        ></RecipeIngredientsList>
        <RecipePreparation
          description={recipe.data[0].instructions}
          foto={recipe.data[0].thumb}
        ></RecipePreparation>
      </div>
    );
  }
};
