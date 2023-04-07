import styled from 'styled-components';

export const FavoriteItem = styled.li`
  width: calc(375px - 32px);
  min-width: 343px;
  padding: 14px;
  text-align: center;
  display: flex;
  justify-content: space-between;
  border-radius: 8px;
  background-color: #ffffff;
  :not(:last-child) {
    margin-bottom: 18px;
  }
  :first-child {
    margin-top: 50px;
  }
  @media screen and (min-width: 768px) {
    width: calc(768px - 64px);
    padding: 28px 24px;
  }
  :not(:last-child) {
    margin-bottom: 40px;
  }
  :first-child {
    margin-top: 100px;
  }
  @media screen and (min-width: 1440px) {
    width: calc(1440px - 200px);
    padding: 40px;
  }
  :not(:last-child) {
    margin-bottom: 50px;
  }
`;

// export const FavoriteList = styled.ul`
//   margin-bottom: 40px;
//   @media screen and (min-width: 768px) {
//     margin-bottom: 50px;
//   }
// `;

// export const contentWrapper = styled.section`
//   padding-bottom: 100px;
//   @media screen and (min-width: 768px) {
//     padding-bottom: 200px;
//   }
//   @media screen and (min-width: 1440px) {
//     padding-bottom: 100px;
//   }
// `;

export const ImageFavoriteCard = styled.img`
  width: 124px;
  height: 124px;

  border-radius: 8px;
  @media screen and (min-width: 768px) {
    width: 228px;
    height: 232px;
  }
  @media screen and (min-width: 1440px) {
    width: 318px;
    height: 324px;
  }
`;

export const FavoriteCardWrapper = styled.div`
  width: 179px;
  display: flex;
  flex-direction: column;
  margin-left: 14px;
  position: relative;
  @media screen and (min-width: 768px) {
    width: 656px;
    margin-left: 24px;
    position: unset;
  }
  @media screen and (min-width: 1440px) {
    width: 802px;
    margin-left: 40px;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 14px;
  @media screen and (min-width: 768px) {
    margin: 0;
  }
  @media screen and (min-width: 1440px) {
  }
`;

export const FavoriteTitle = styled.h3`
  font-size: 14px;
  line-height: 1;
  font-weight: 500;
  margin: 0;
  vertical-align: top;
  text-align: left;
  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 1;
  }
  @media screen and (min-width: 1440px) {
    margin-bottom: 50px;
  }
`;

export const FavoriteTrashLogo = styled.div`
  display: block;
  position: absolute;
  right: 0;
  bottom: 0;
  @media screen and (min-width: 768px) {
    margin-bottom: 18px;
    height: 38px;
    width: 38px;
    position: unset;
  }
  @media screen and (min-width: 1440px) {
    margin-bottom: 30px;
    height: 44px;
    width: 44px;
  }
`;

export const FavoriteTrashBtn = styled.button`
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1440px) {
  }
`;

export const DiscriptionFirstText = styled.p`
  width: 173px;
  height: 57px;
  font-size: 8px;
  line-height: 1.25;
  @media screen and (min-width: 768px) {
    width: 298px;
    height: 73px;
    margin-bottom: 58px;
    overflow: hidden;
    line-height: 1.28;
    font-size: 14px;
  }
  @media screen and (min-width: 1440px) {
    font-size: 18px;
    line-height: 1.33;
    display: block;
    width: 679px;
    margin-bottom: 14px;
  }
`;

export const FavoriteBtnWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  flex-grow: 2;
  justify-content: space-between;
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1440px) {
  }
`;

export const FavoriteTime = styled.p`
  font-size: 10px;
  font-weight: 500;
  line-height: 1.4;
  display: flex;
  align-items: flex-end;
  margin: 0;
  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 1.43;
  }
  @media screen and (min-width: 1440px) {
    font-size: 14px;
    line-height: 1.43;
  }
`;

export const BtnWrapper = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    width: 138px;
    height: 45px;
    display: block;
    line-height: 1.5;
    font-size: 14px;
  }
  @media screen and (min-width: 1440px) {
    width: 160px;
    height: 54px;
    display: block;
    font-size: 16px;
  }
`;

export const FavoriteBtnSeeRecipe = styled.button`
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1440px) {
  }
`;
