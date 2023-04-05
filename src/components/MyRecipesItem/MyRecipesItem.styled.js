import styled from 'styled-components';

export const CardItem = styled.li`
  display: flex;
  list-style-type: none;
  justify-content: space-between;
    padding: 14px;
  :first-child {
    margin-top: 50px;
  }
  :not(:last-child) {
    margin-bottom: 18px;
  :last-child{
    margin-bottom: 0;
  }
  @media screen and (min-width: 768px) {
    height: 288px;
    margin-bottom: 40px;
    padding: 28px;
  }
  @media screen and (min-width: 1440px) {
    height: 404px;
    margin-bottom: 50px;
    padding: 40px;
      width: 1240px;
  }
`;

export const ImgContainer = styled.div`
  position: relative;
  left: 50px;
  width: 340px;
  height: 372px;
  display: block;
  height: 100%;
  min-width: 152px;
  border-radius: 8px;
  overflow: hidden;
  @media screen and (min-width: 768px) {
    min-width: 288px;
  }
  @media screen and (min-width: 1440px) {
    min-width: 404px;
  }
`;

export const ImageCard = styled.img`
  //   height: 100%;
  //   border-radius: 8px;
  //   object-fit: cover;
  //   backgroun-color: green;
  width: 318px;
  height: 324px;

  //   background: url(mink-mingle-LGNxQzYmeUk-unsplash.jpg);
  border-radius: 8px;
  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const WrapperButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 14px;
`;

export const TitleRecipe = styled.h3`
  display: block;
  //   font-weight: 500;
  //   font-size: 14px;
  //   line-height: 14px;
  //   letter-spacing: -0.02em;

  //   position: absolute;
  //   top: 0;
  //   left: 14px;
  //   font-family: 'Poppins';
  //   font-style: normal;
  //   color: #3e4462;
  //   padding-right: 24px;
  //   @media screen and (min-width: 768px) {
  //     left: 24px;
  //     font-size: 24px;
  //     line-height: 24px;
  //     padding-right: 38px;
  //   }
  //   @media screen and (min-width: 1440px) {
  //     left: 54px;
  //     padding-right: 44px;
  //   }
  position: absolute;
  width: 251px;
  height: 24px;
  left: 40px;
  top: 0px;

  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 24px;
  /* identical to box height, or 100% */

  letter-spacing: -0.24px;

  color: #3e4462;
`;
export const TrashButton = styled.button`
  //   width: 24px;
  //   height: 24px;
  //   border-radius: 4px;
  border: none;
  outline: none;
  //   padding: 5px;
  //   color: green;
  position: absolute;
  width: 44px;
  height: 44px;
  left: 784px;
  top: 0px;

  background: #8baa36;
  border-radius: 4px;

  background-image: url('./images/commonSvgImg/icon-trash.svg');
  background-repeat: no-repeat;

    margin: 0 auto;
  }
`;

export const Text = styled.p`
  //   display: block;
  //   font-weight: 400;
  //   //   font-size: 8px;
  //   line-height: 10px;
  //   letter-spacing: -0.02em;
  //   color: var(--secondaryTextColorForText);
  //   overflow: auto;
  width: 806px;
  height: 72px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: -0.02em;
  color: #23262a;
`;

export const WrapperUp = styled.div`
  display: flex;
  flex-grow: 2;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: 8px;
`;

export const Time = styled.p`
  //   display: flex;
  //   flex-grow: 2;
  //   justify-content: space-between;
  //   align-items: flex-end;
  //   margin-top: 8px;
  width: 47px;
  height: 20px;

  /* Body / Small Text - Medium */

  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  /* identical to box height, or 143% */

  letter-spacing: -0.24px;

  color: #3e4462;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const BtnWrapper = styled.div`
  width: 87px;
  height: 27px;
  font-size: 10px;
  line-height: 1.5;
`;
export const BtnSeeRecipe = styled.button`
  //   width: 24px;
  //   height: 24px;
  //   border-radius: 4px;
  //   border: none;
  outline: none;
  //   padding: 5px;
  //   color: green;
  position: absolute;
  width: 172px;
  height: 59px;
  left: 656px;
  top: 265px;
  border: none;
  background: #8baa36;
  color: white;
`;

export const MainContainer = styled.div`
  //   width: 209px;
  //   height: 152px;
  //   padding: 14px;
  //   position: relative;
  //   //   background-color: var(--BgRecipeCard);
  //   display: flex;
  flex-direction: column;

  display: flex;
  //   flex-direction: row;
  //   align-items: flex-start;
  padding: 40px 0px 40px 40px;
  gap: 14px;

  position: relative;

  height: 404px;
  // left: 100px;
  //   top: 762px;

  background: #ffffff;
  border-radius: 8px;
`;