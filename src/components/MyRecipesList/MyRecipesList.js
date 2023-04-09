import React, { useState } from 'react';
import { useOwnRecipes } from '../../api/hooks';
import { MyRecipesItem } from '../MyRecipesItem/MyRecipesItem';
import { Paginator } from '../Paginator/Paginator';
import {
  MyRecipe,
  // NoRecipesImg,
  // Image,
  CardList,
  NoRecipesText,
} from './MyRecipesList.styled.js';
// import noRecipesImage from '../../images/norecipes/noRecipesImg.png';

export const MyRecipesList = () => {
  const [page, setPage] = useState(1);
  const [limit] = useState(4);

  const { data: ownRecipes, isLoading } = useOwnRecipes({ page, limit });

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
          {!isLoading && ownRecipes && ownRecipes.length === 0 && (
            <>
              {/* <NoRecipesImg /> */}
              {/* <Image src={noRecipesImage} /> */}
              <NoRecipesText>You don't have any recipe.</NoRecipesText>
            </>
          )}
          {!isLoading &&
            ownRecipes &&
            ownRecipes.map(recipe => (
              <MyRecipesItem
                key={recipe.id}
                thumb={recipe.thumb}
                category={recipe.category}
                title={recipe.title}
                description={recipe.description}
                time={recipe.time}
                previewHeight="auto"
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
