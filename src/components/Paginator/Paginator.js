import React from 'react';
import { Container, Button } from './Paginator.styled.js';

export const Paginator = ({
  page,
  handleNextPage,
  handlePrevPage,
  ownRecipes,
  limit,
}) => {
  if (!ownRecipes) {
    return null;
  }

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(ownRecipes.length / limit); i++) {
    pageNumbers.push(i);
  }

  return (
    <Container>
      {pageNumbers.map(pageNumber => (
        <>
          <Button disabled={page === 1} onClick={handlePrevPage}>
            Prev
          </Button>
          <Button
            key={pageNumber}
            onClick={() => handleNextPage(pageNumber)}
            className={pageNumber === page ? 'active' : ''}
          >
            {pageNumber}
          </Button>
          <Button
            disabled={!ownRecipes || ownRecipes.length < limit}
            onClick={() => handleNextPage(page + 1)}
          >
            Next
          </Button>
        </>
      ))}
    </Container>
  );
};
