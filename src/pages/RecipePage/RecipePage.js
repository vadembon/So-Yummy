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
    const {
      title,
      description,
      favorites,
      time,
      instructions,
      thumb,
      ingredients,
      isFavorite,
      _id,
    } = recipe.data;

    console.log(recipe.data._id);
    console.log(recipe.data.isFavorite);
    console.log(recipe.data);

    return (
      <div>
        <RecipePageHero
          _id={_id}
          isFavorite={isFavorite}
          title={title}
          description={description}
          favorites={favorites}
          time={time}
        ></RecipePageHero>
        <RecipeIngredientsList
          ingredients={ingredients}
        ></RecipeIngredientsList>
        <RecipePreparation
          description={instructions}
          foto={thumb}
        ></RecipePreparation>
      </div>
    );
  }
};
