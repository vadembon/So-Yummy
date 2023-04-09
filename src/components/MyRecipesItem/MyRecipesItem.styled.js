import styled from 'styled-components';

export const CardItem = styled.li`
  display: flex;
  list-style-type: none;
  justify-content: space-between;
   background: #ffffff;
    border-radius: 8px;
    // padding: 14px;
  // :first-child {
  //   margin-top: 50px;
  // }
  // :not(:last-child) {
  //   margin-bottom: 18px;
  // :last-child{
  //   margin-bottom: 0;
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
  // position: relative;
  // left: 50px;
  // width: 340px;
  // height: 372px;
  // display: block;
  // height: 100%;
  // min-width: 152px;
  // border-radius: 8px;
  // overflow: hidden;
  // @media screen and (min-width: 768px) {
  //   min-width: 288px;
  // }
  // @media screen and (min-width: 1440px) {
  //   min-width: 404px;
  // }
`;

export const ImageCard = styled.img`
  //   height: 100%;
  border-radius: 8px;
  object-fit: cover;
  width: 318px;
  height: 324px;
  //   background: url(mink-mingle-LGNxQzYmeUk-unsplash.jpg);
  flex: none;
  order: 0;
  flex-grow: 0;
  // @media screen and (min-width: 768px) {
  //   width: 250px;
  //   height: 288px;
  // }

  // @media screen and (min-width: 1440px) {
  //   width: 340px;
  //   height: 372px;
  // }
`;

export const MainContainer = styled.div`
  background: #ffffff;
  flex-direction: column;
  display: flex;
  border-radius: 8px;
  padding: 40px 0px 40px 40px;
  gap: 14px;
  position: relative;
  // height: 404px;
  // flex-direction: row;
  // align-items: flex-start;
  // left: 100px;
  // top: 762px;
  // width: 209px;
  // height: 152px;
  // padding: 14px;
  // @media screen and (min-width: 768px) {
  //   padding-left: 24px;
  //   width: 446px;
  //   height: 288px;
  //   padding: 28px;
  // }
  // @media screen and (min-width: 1440px) {
  //   padding-left: 54px;
  //   width: 886px;
  //   height: 372px;
  //   padding: 40px;
  // }
`;

export const WrapperButtons = styled.div`
  // display: flex;
  // flex-direction: row;
  // justify-content: space-between;
  // align-items: flex-start;
  // margin-bottom: 14px;
`;

export const TitleRecipe = styled.h3`
  display: block;
  //   font-size: 14px;
  //   line-height: 14px;
  //   letter-spacing: -0.02em;
  //   left: 14px;
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
  width: 271px;
  height: 24px;
  left: 40px;
  top: 0px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 24px;
  letter-spacing: -0.24px;
  color: #3e4462;
`;
// export const TrashButton = styled.button`
//   //   width: 24px;
//   //   height: 24px;
//   //   border-radius: 4px;
//   border: none;
//   outline: none;
//   //   padding: 5px;
//   //   color: green;
//   position: absolute;
//   width: 44px;
//   height: 44px;
//   left: 784px;
//   top: 0px;

//   background: #8baa36;
//   border-radius: 4px;

//   background-image: url('./images/commonSvgImg/icon-trash.svg');
//   background-repeat: no-repeat;

//     margin: 0 auto;
//   }
// `;

export const ButtonDelete = styled.div`
  border: none;
  outline: none;
  position: absolute;
  width: 44px;
  height: 44px;
  right: 0;
  top: 0px;
  background: #8baa36;
  border-radius: 4px;
  margin: 0 auto;
`;

export const Text = styled.p`
  // display: block;
  //   font-size: 8px;
  //   line-height: 10px;
  //   letter-spacing: -0.02em;
  overflow: auto;
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
  // margin-top: 8px;
`;

export const Time = styled.p`
  //   display: flex;
  //   flex-grow: 2;
  //   justify-content: space-between;
  //   align-items: flex-end;
  //   margin-top: 8px;
  width: 67px;
  height: 20px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.24px;
  color: #3e4462;
  flex: none;
  order: 0;
  flex-grow: 0;
  // @media screen and (min-width: 768px) {
  //   font-size: 14px;
  //   line-height: 20px;
  // }

  // @media screen and (min-width: 1440px) {
  //   font-size: 14px;
  //   line-height: 20px;
  // }
`;

// export const BtnWrapper = styled.div`
//   width: 87px;
//   height: 27px;
//   font-size: 10px;
//   line-height: 1.5;
// `;

export const SuperBtnWrapper = styled.div`
  width: 87px;
  height: 27px;
  font-size: 10px;
  line-height: 1.5;
  @media screen and (min-width: 768px) {
    width: 138px;
    height: 45px;
    font-size: 14px;
    line-height: 2.1;
  }
  @media screen and (min-width: 1440px) {
    width: 172px;
    height: 59px;
    font-size: 16px;
    line-height: 2.4;
  }
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
