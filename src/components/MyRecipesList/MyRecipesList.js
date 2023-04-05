import { MyRecipesItem } from '../MyRecipesItem/MyRecipesItem';
import { Paginator } from '../Paginator/Paginator';
import React, { useState } from 'react';
// import axios from 'axios';
import { useOwnRecipes, useDeleteOwnRecipe } from '../../api/hooks';

export const MyRecipesList = () => {
  const [data] = useState(null);
  const { data: ownRecipes } = useOwnRecipes({ page: 1, limit: 4 });
  const { mutate: deleteRecipe } = useDeleteOwnRecipe();

  const handleDeleteOwnRecipe = async id => {
    try {
      const response = await deleteRecipe(id);
      console.log('deleted recipe:', response);
    } catch (error) {
      console.log('delete recipe error:', error);
    }
  };

  return (
    <section>
      <div>
        <div>
          <h2>My recipes</h2>
        </div>
        <ul>
          {data
            ?.slice(0, 4)
            .map(({ id, image, tags, title, cookingTime, about }) => (
              <MyRecipesItem
                key={id}
                image={image}
                tags={tags}
                title={title}
                about={about}
                cookingTime={cookingTime}
                handelDelete={handleDeleteOwnRecipe.bind(null, id)}
              />
            ))}
          {ownRecipes &&
            ownRecipes.map(recipe => (
              <MyRecipesItem
                key={recipe.id}
                image={recipe.image}
                tags={recipe.category}
                title={recipe.title}
                about={recipe.about}
                cookingTime={recipe.cookingTime}
                previewHeight="auto"
                handelDelete={handleDeleteOwnRecipe.bind(null, recipe.id)}
              />
            ))}
          <Paginator />
        </ul>
      </div>
    </section>
  );
};

// import { MyRecipesItem } from '../MyRecipesItem/MyRecipesItem';
// import { Paginator } from '../Paginator/Paginator';
// import React, { useState } from 'react';
// import {
//   useOwnRecipes,
//   useAddOwnRecipe,
//   useDeleteOwnRecipe,
// } from '../../api/hooks';
// import { useHistory } from 'react-router-dom';

// export const MyRecipesList = () => {
//   const [currentPage, setCurrentPage] = useState(1);
//   const {
//     data: ownRecipes,
//     isLoading,
//     error,
//   } = useOwnRecipes({ page: currentPage, limit: 4 });
//   const { mutate: addRecipe } = useAddOwnRecipe();
//   const { mutate: deleteRecipe } = useDeleteOwnRecipe();
//   const history = useHistory();

//   const handleDeleteOwnRecipe = async id => {
//     try {
//       const response = await deleteRecipe(id);
//       console.log('deleted recipe:', response);
//     } catch (error) {
//       console.log('delete recipe error:', error);
//     }
//   };

//   const handleAddOwnRecipe = async () => {
//     try {
//       const response = await addRecipe({
//         title: 'New Recipe',
//         image: 'https://example.com/image.jpg',
//         about: 'Some information about the recipe',
//         category: 'Dessert',
//         cookingTime: 30,
//         preparation: 'Some preparation steps',
//         ingredients: [
//           {
//             id: 1,
//             name: 'Sugar',
//             image: 'https://example.com/sugar.jpg',
//             quantity: 2,
//             unit: 'tbsp',
//           },
//         ],
//       });
//       console.log('added recipe:', response);
//     } catch (error) {
//       console.log('add recipe error:', error);
//     }
//   };

//   const handlePageChange = page => {
//     setCurrentPage(page);
//     history.push(`?page=${page}`);
//   };

//   const totalPages = ownRecipes?.pagination?.totalPages || 0;

//   if (error) {
//     return <div>Error loading recipes...</div>;
//   }

//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

//   if (ownRecipes?.data?.length === 0) {
//     return null;
//   }

//   return (
//     <section>
//       <div>
//         <div>
//           <h2>My recipes</h2>
//         </div>
//         <ul>
//           {ownRecipes?.data?.map(recipe => (
//             <MyRecipesItem
//               key={recipe.id}
//               image={recipe.image}
//               tags={recipe.category}
//               title={recipe.title}
//               about={recipe.about}
//               cookingTime={recipe.cookingTime}
//               previewHeight="auto"
//               handelDelete={() => handleDeleteOwnRecipe(recipe.id)}
//             />
//           ))}
//           <button onClick={handleAddOwnRecipe}>Add Recipe</button>
//           {totalPages > 0 && (
//             <Paginator
//               totalPages={totalPages}
//               currentPage={currentPage}
//               onPageChange={handlePageChange}
//             />
//           )}
//         </ul>
//       </div>
//     </section>
//   );
// };
