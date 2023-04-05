import React from 'react';
import { ReactComponent as TrashIconSvg } from '../../images/commonSvgImg/icon-trash.svg';
import {
  CardItem,
  ImageCard,
  ImgContainer,
  MainContainer,
  WrapperButtons,
  TitleRecipe,
  TrashButton,
  Text,
  WrapperUp,
  Time,
  BtnWrapper,
  BtnSeeRecipe,
} from './MyRecipesItem.styled.js';

export const MyRecipesItem = ({
  image,
  category,
  title,
  handelDelete,
  about,
  cookingTime,
}) => {
  return (
    <CardItem>
      <ImgContainer>
        <ImageCard src={image} alt={category} />
      </ImgContainer>
      <MainContainer>
        <WrapperButtons>
          <TitleRecipe>{title}</TitleRecipe>
          <TrashButton type="button" onDelete={handelDelete}>
            <TrashIconSvg />
          </TrashButton>
        </WrapperButtons>
        <Text>{about}</Text>
        <WrapperUp>
          <Time>{cookingTime}</Time>
        </WrapperUp>
        <BtnWrapper>
          <BtnSeeRecipe>See reecipe</BtnSeeRecipe>
        </BtnWrapper>
      </MainContainer>
    </CardItem>
  );
};

export default MyRecipesItem;
