import {
  useShoppingList,
  useAddShoppingList,
  useDeleteShoppingList,
} from '../hooks';
// import { useState } from 'react';

// {
//   id: '640c2dd963a319ea671e372e',
//   recipe: '640cd5ac2d9fecf12e8897fc111',
//   measure: '14 oz jar',
//   ttl: 'Onions',
//   thb: 'https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678564854/v68e3x3qklciznrsbjij.pnghttps://res.cloudinary.com/ddbvbv5sp/image/upload/v1678564854/v68e3x3qklciznrsbjij.png',
// }

const ingredient = {
  id: '640c2dd963a319ea671e372e',
  recipe: '640cd5ac2d9fecf12e8897fc-88',
  measure: '14 oz jar',
  ttl: 'Onions',
  thb: 'https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678564854/v68e3x3qklciznrsbjij.pnghttps://res.cloudinary.com/ddbvbv5sp/image/upload/v1678564854/v68e3x3qklciznrsbjij.png',
};

export const ShoppingListTest = () => {
  const shoppingList = useShoppingList({
    onSuccess: console.log,
    onError: console.log,
  });
  const addShoppingList = useAddShoppingList({
    onSuccess: console.log,
    onError: console.log,
  });
  const deleteShoppingList = useDeleteShoppingList({
    onSuccess: console.log,
    onError: console.log,
  });

  const isLoading =
    shoppingList.isLoading ||
    addShoppingList.isLoading ||
    deleteShoppingList.isLoading;

  const error =
    shoppingList.error || addShoppingList.error || deleteShoppingList.error;

  const handleAdd = e => {
    addShoppingList.mutate(ingredient);
  };

  const handleDelete = e => {
    deleteShoppingList.mutate([
      { id: ingredient.id, recipe: ingredient.recipe },
      { id: '640c2dd963a319ea671e372e', recipe: '640cd5ac2d9fecf12e8897fc-88' },
      { id: '640c2dd963a319ea671e372e', recipe: '640cd5ac2d9fecf12e8897fc-77' },
    ]);
  };

  return (
    <>
      <h3>ShoppingList</h3>
      {/* <p>{JSON.stringify(recipes.data)}</p> */}

      <p>{JSON.stringify(shoppingList?.data?.length)}</p>
      <p>
        {JSON.stringify(
          shoppingList?.data?.map(({ id, ttl, recipe }) => ({
            id,
            ttl,
            recipe,
          }))
        )}
      </p>

      <button onClick={handleAdd}>Add to ShoppingList</button>
      <button onClick={handleDelete}>Delete from ShoppingList</button>

      {error && <p>Error {error.message}</p>}
      {isLoading && <p>Loading... </p>}
    </>
  );
};

//---------RecipeDetails---------

// function RecipeDetails() {
//   const { recipeId } = useParams();
//   const recipe = useRecipe(recipeId);
//   const shoppingList = useShoppingList();

//   const selectedIngredientIds = shoppingList.data
//     .filter(item => item.recipe === recipeId)
//     .map(item => item.id);

//   return (
//     <>
//       <h2>{recipe.data.ttl}</h2>
//       {recipe.data.ingredients.map(item => (
//         <Ingredient
//           key={item._id}
//           data={item}
//           isSelected={selectedIngredientIds.includes(item._id)}
//         />
//       ))}
//     </>
//   );
// }

// function Ingredient({ key, data, recepeId, isSelected }) {
//   const deleteShoppingList = useDeleteShoppingList();
//   const addShoppingList = useAddShoppingList();

//   function handleClick(e) {
//     if (e.target.checked) {
//       deleteShoppingList.mutate({ id: data.id, recipe: recepeId });
//     } else {
//       addShoppingList.mutate(data);
//     }
//   }

//   return (
//     <li key={key}>
//       <p>{data.thb}</p>
//       <p>{data.ttl}</p>
//       <p>{data.measure}</p>
//       {deleteShoppingList.isLoading || addShoppingList.isLoading ? (
//         <SmallLoader />
//       ) : (
//         <input type="checkbox" checked={isSelected} onClick={handleClick} />
//       )}
//     </li>
//   );
// }
//-----------SHOPPING LIST-----------
// function ShoppingList() {
//   const shoppingList = useShoppingList();

//   const summaryList = getSummaryList(shoppingList.data); // [{key: [{id, recipe}], ttl, thb, qty, unit}]

//   return (
//     <>
//       {summaryList.map(item => (
//         <ShoppingItem key={item.key} data={item} />
//       ))}
//     </>
//   );
// }

// function ShoppingItem({ data, key }) {
//   const deleteShoppingList = useDeleteShoppingList();

//   function handleClick(e) {
//     deleteShoppingList.mutate(key);
//   }
//   return (
//     <li key={key}>
//       <p>{data.thb}</p>
//       <p>{data.ttl}</p>
//       <p>{data.measure}</p>
//       {deleteShoppingList.isLoading ? (
//         <SmallLoader />
//       ) : (
//         <button type="button" onClick={handleClick}>
//           X
//         </button>
//       )}
//     </li>
//   );
// }
