import React, { useState } from 'react';
import { useOwnRecipes, useDeleteOwnRecipe } from '../../api/hooks';
import { MyRecipesItem } from '../MyRecipesItem/MyRecipesItem';
import { Paginator } from '../Paginator/Paginator';
import { MyRecipe, CardList, NoRecipesText } from './MyRecipesList.styled.js';

export const MyRecipesList = () => {
  const [page, setPage] = useState(1);
  const [limit] = useState(4);

  const { data: ownRecipes, isLoading } = useOwnRecipes({ page, limit });

  const { mutate } = useDeleteOwnRecipe();

  const deleteRecipe = id => {
    mutate(id);
  };

  const handleNextPage = () => {
    setPage(page => page + 1);
  };

  const handlePrevPage = () => {
    setPage(page => Math.max(page - 1, 1));
  };

  return (
    <MyRecipe>
      <div>
        <CardList>
          {isLoading && <p>Loading...</p>}
          {!isLoading && ownRecipes.length === 0 && (
            <NoRecipesText>You don't have any recipe.</NoRecipesText>
          )}
          {!isLoading &&
            ownRecipes &&
            ownRecipes.map(recipe => (
              <MyRecipesItem
                id={recipe._id}
                thumb={recipe.thumb}
                category={recipe.category}
                title={recipe.title}
                description={recipe.description}
                time={recipe.time}
                previewHeight="auto"
                handleDelete={() => deleteRecipe(recipe._id)}
              />
            ))}
        </CardList>
        <Paginator
          page={page}
          handleNextPage={handleNextPage}
          handlePrevPage={handlePrevPage}
          ownRecipes={ownRecipes}
          limit={limit}
        />
      </div>
    </MyRecipe>
  );
};
