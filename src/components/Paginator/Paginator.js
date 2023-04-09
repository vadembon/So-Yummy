import React from 'react';
import { Container, Button } from './Paginator.styled.js';

export const Paginator = ({
  page,
  handleNextPage,
  handlePrevPage,
  ownRecipes,
  limit,
}) => {
  return (
    <Container>
      <Button disabled={page === 1} onClick={handlePrevPage}>
        Prev
      </Button>
      <Button
        disabled={!ownRecipes || ownRecipes.length < limit}
        onClick={handleNextPage}
      >
        Next
      </Button>
    </Container>
  );
};
