import { useParams } from 'react-router-dom';
import { useRecipeDetails } from 'api/hooks';

import { RecipeIngredientsList } from 'components/RecipeIngredientsList';
import { RecipePageHero } from 'components/RecipePageHero';
import { RecipePreparation } from 'components/RecipePreparation';

 /* export const RecipePage = () => {
 const recipe = useRecipeDetails('640cd5ac2d9fecf12e8897fc'); */

export const RecipePage = () => {
  const { recipeId } = useParams();
  const recipe = useRecipeDetails(recipeId);

  if (recipe.isLoading) {
    // Данные с сервера еще не загрузились, нужно показывать лоадер
    return <p>Loading... Когда начнет приходить id из строки браузера, страница будет рендерится. </p>;
  }

  if (recipe.data) {
    // Данные уже пришли, рендерим рецепт
    /* const {
      title,
      description,
      favorites,
      time,
      instructions,
      thumb,
      ingredients,
    } = recipe.data; */

  //  console.log(recipe.data[0].title);

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
