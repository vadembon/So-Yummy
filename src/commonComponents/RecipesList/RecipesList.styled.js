import styled from 'styled-components';

export const DishList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-top: 42px;
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
    margin-top: 40px;
  }
  @media screen and (min-width: 1440px) {
    width: 1440px;
    row-gap: 100px;
    column-gap: 14px;
    margin-top: 90px;
  }
`;
export const DishItem = styled.li`
  // margin-bottom: 28px;

  @media screen and (min-width: 1440px) {
    // margin-bottom: 100px;
    justify-content: center;
  }
`;
