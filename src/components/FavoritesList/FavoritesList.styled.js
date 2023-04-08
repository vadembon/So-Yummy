import styled from 'styled-components';

export const FavoritesContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px 16px 100px;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;

export const FavoritesListContent = styled.ul`
  display: grid;
  grid-template-columns: 343px;
  grid-template-rows: repeat(4, 152px);
  grid-column-gap: 0px;
  grid-row-gap: 18px;

  @media screen and (min-width: 768px) {
    grid-template-columns: 704px;
    grid-template-rows: repeat(4, 228px);
    grid-row-gap: 40px;
  }

  @media screen and (min-width: 1440px) {
    grid-template-columns: 1240px;
    grid-template-rows: repeat(4, 404px);
    grid-row-gap: 50px;
  }
`;
