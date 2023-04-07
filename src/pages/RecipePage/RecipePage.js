import { useParams } from 'react-router-dom';
import { useRecipeDetails } from 'api/hooks';

import { RecipeIngredientsList } from 'components/RecipeIngredientsList';
import { RecipePageHero } from 'components/RecipePageHero';
import { RecipePreparation } from 'components/RecipePreparation';

// export const RecipePage = () => {
// const { recipeId } = useParams();
// const recipe = useRecipeDetails('640cd5ac2d9fecf12e8897fc');

export const RecipePage = () => {
  const { recipeId } = useParams();
  const recipe = useRecipeDetails(recipeId);

  if (recipe.isLoading) {
    // Данные с сервера еще не загрузились, нужно показывать лоадер
    return <p>Loading...</p>;
  }

  if (recipe.data) {
    // Данные уже пришли, рендерим рецепт
    const {
      title,
      description,
      favorites,
      time,
      instructions,
      thumb,
      ingredients,
    } = recipe.data;

    console.log(recipe.data);

    return (
      <div>
        <RecipePageHero
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
