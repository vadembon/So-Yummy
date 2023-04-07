import styled from 'styled-components';

export const DishList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-top: 50px;
  margin-bottom: 50px;
  // min-height: 746px;
  width: 375px;
  margin-left: auto;
  margin-right: auto;
  row-gap: 28px;
  justify-content: center;
  
  // align-items: center;
  @media screen and (min-width: 768px) {
    width: 768px;
    gap: 32px;
  };
  @media screen and (min-width: 1440px) {
    width: 1240px;
    row-gap: 100px;
    column-gap: 12px; 
  }

`;

export const DishItem = styled.li`
  // margin-bottom: 28px;

 

  @media screen and (min-width: 1440px) {
    // margin-bottom: 100px;
    justify-content: center;
  }
`;