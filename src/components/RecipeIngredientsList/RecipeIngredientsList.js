import { useParams } from 'react-router-dom';
import { useRecipeDetails } from 'api/hooks';
//import { useShoppingList } from 'api/hooks';
//import { useDeleteShoppingList } from 'api/hooks';
//import { useAddShoppingList } from 'api/hooks';
import {
  AddToList,
  Ingredients,
  IngredientsList,
  Number,
  IngedientsListUl,
  IngedientsItemLi,
  IngedientsImg,
  Wrap,
  IngedientsTitle,
  IngedientsMeasure,
  IngedientsCheck,
  CheckBoxWrap,
  CheckBoxLabel,
  CheckMarkIcon,
} from './RecipeIngredientsList.styled';

/* function RecipeDetails() {
  const { recipeId } = useParams();
  const recipe = useRecipe(recipeId);
 // запит до ShoppingList
  const shoppingList = useShoppingList();
  // отримаємо масив id інгредієнтів у ShoppingList доданих зі сторінки поточного рецепта
  const selectedIngredientIds = shoppingList.data?.filter(item => item.recipe === recipeId)?.map(item => item.id);
  // У компонент Ingredient передаємо пропс IsSelected, який буде true, якщо id поточного інгредієнта є у масиві selectedIngredientIds
  return (
    <>
      <h2>{recipe.data.ttl}</h2>
      {recipe.data?.ingredients.map(item => (
        <Ingredient
          key={item._id}
          data={item}
          isSelected={selectedIngredientIds.includes(item._id)}
        />
      ))}
    </>
  );
} */


/* function Ingredient({ key, data, recepeId, isSelected }) {
  const deleteShoppingList = useDeleteShoppingList();
  const addShoppingList = useAddShoppingList();

  function handleClick(e) {
    // якщо чекбокс був обраний, робимо запит на видалення інгредієнта з ShoppingList
    if (e.target.checked) {
      deleteShoppingList.mutate({ id: data.id, recipe: recepeId });

      // якщо чекбокс не був обраний, робимо запит на додавання інгредієнта до ShoppingList
    } else {
      addShoppingList.mutate(data);
    }
  }

  //під час рендеру поки isLoading = true замість чекбоксу показуємо лоадер
  //пропс isSelected задає стан чекбоксу: обраний чи ні
  return (
    <li key={key}>
      <p>{data.thb}</p>
      <p>{data.ttl}</p>
      <p>{data.measure}</p>
      {deleteShoppingList.isLoading || addShoppingList.isLoading ? (
        <SmallLoader />
      ) : (
        <input type="checkbox" checked={isSelected} onClick={handleClick} />
      )}
    </li>
  );
} */



export const RecipeIngredientsList = ({ ingredients }) => {
  const { recipeId } = useParams();
  const recipe = useRecipeDetails(recipeId);
  // const shoppingList = useShoppingList();
 // const selectedIngredientIds = shoppingList.data?.filter(item => item.recipe === recipeId)?.map(item => item.id);
// const selectedIngredientIds = shoppingList.data?.filter(item => item.recipe === recipeId)?.map(item => item._id);
// const selectedIngredientIds = shoppingList.data?.filter(item => item.recipe === recipeId)?.map(({ _id }) => _id);
// const selectedIngredientIds = shoppingList.data?.filter(item => item.recipe === recipeId)?.map(item => item.id);



 /* function Ingredient({ key, data, recepeId, isSelected }) {
  const deleteShoppingList = useDeleteShoppingList();
  const addShoppingList = useAddShoppingList();

  function handleClick(e) {
    // якщо чекбокс був обраний, робимо запит на видалення інгредієнта з ShoppingList
    if (e.target.checked) {
      deleteShoppingList.mutate({ id: data.id, recipe: recepeId });

      // якщо чекбокс не був обраний, робимо запит на додавання інгредієнта до ShoppingList
    } else {
      addShoppingList.mutate(data);
    }
  } */
  

  return (
    <>
    <IngredientsList>
        <Ingredients>Ingredients</Ingredients>
        <Number>Number</Number>
        <AddToList>Add to list</AddToList>
      </IngredientsList>

      <IngedientsListUl>
        {ingredients &&
          recipe.data?.ingredients.map(({ thb, _id, measure, ttl }) => {
            return (
              <IngedientsItemLi key={_id}>
                <Wrap>
                  {<IngedientsImg src={thb ? thb : ''} alt="Ingredient" />}
                  <IngedientsTitle>{ttl}</IngedientsTitle>
                </Wrap>
                <Wrap>
                  <IngedientsMeasure>{measure}</IngedientsMeasure>
                  <CheckBoxLabel htmlFor={ttl} >
                    {/* <IngedientsCheck type="checkbox" id={ttl} isSelected={selectedIngredientIds.includes( {_id} )} /> */}
                    {/* <IngedientsCheck type="checkbox" id={ttl} isSelected={_id && selectedIngredientIds.includes(_id)} /> */}
                    <IngedientsCheck type="checkbox" id={ttl} /* isSelected={selectedIngredientIds.includes(_id)} onClick={handleClick} */ />
                    
                    <CheckBoxWrap>
                      <CheckMarkIcon />
                    </CheckBoxWrap>
                  </CheckBoxLabel>
                </Wrap>
              </IngedientsItemLi>
            );
          })}
      </IngedientsListUl>
    </>
  );
};