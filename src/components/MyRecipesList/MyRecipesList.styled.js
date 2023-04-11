import styled from 'styled-components';

// import NoRecipesImg from '../../images/notFound/bronot_found_people_tab1x.png';

export const List = styled.div`
  position: relative;
  padding-top: 50px;
  padding-bottom: 40px;
`;

export const Title = styled.h1`
  padding-top: 50px;
  font-weight: 600;
  font-size: 28px;
  line-height: 1;
  letter-spacing: -0.02em;
  color: black;
  @media screen and (min-width: 768px) {
    font-size: 32px;
    padding-top: 72px;
  }
  @media screen and (min-width: 1440px) {
    font-size: 44px;
    padding-top: 100px;
  }
`;

export const MyRecipe = styled.section`
  // padding-bottom: 100px;
  // @media screen and (min-width: 768px) {
  //   padding-bottom: 200px;
  // }
  // @media screen and (min-width: 1440px) {
  //   margin-bottom: 200px;
  // }
  // text-align: center;
  padding-left: 100px;
`;

export const CardList = styled.ul`
  margin-bottom: 40px;
`;
// export const NoRecipesImg = styled.img`
//   width: 208px;
//   height: 133px;
//   margin: auto;
//   background-image: url('../../images/notFound/bronot_found_people_tab1x.png');
//   background-size: contain;
//   margin-bottom: 33px;
//   margin-top: 25px;
// `;

export const Image = styled.div`
  width: 208px;
  height: 133px;
  margin: auto;
  margin-bottom: 33px;
  margin-top: 25px;
`;

// export const noRecipesImg = styled.h1`
//   width: 350px;
//   height: 225px;
//   margin-bottom: 33px;
//   margin-top: 125px;
// `;
export const NoRecipesText = styled.p`
  text-align: center;
  font-weight: 500;
  font-size: 14px;
  line-height: 14px;
  letter-spacing: -0.02em;
  margin-bottom: 101px;
  opacity: 0.5;
  color: black;
`;

// export const noRecipesText = styled.h1`
//     font-size: 24px;
//     line-height: 24px;
//     letter-spacing: -0.02em;
//     margin-bottom: 200px;
// `;
// export const List = styled.div`
//   position: relative;
//   padding-top: 50px;
//   padding-bottom: 40px;
// `;

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

export const PaginationButton = styled.a`
  text-decoration: none;
  color: #999;
  font-weight: bold;
  margin: 0 5px;
  padding: 5px 10px;
  border-radius: 5px;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #f5f5f5;
  }
`;

export const ActivePaginationButton = styled(PaginationButton)`
  color: #fff;
  background-color: #008080;
  cursor: default;

  &:hover {
    background-color: #008080;
  }
`;
