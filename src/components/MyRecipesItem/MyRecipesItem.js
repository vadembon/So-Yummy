import React from 'react';
import { useLocation } from 'react-router-dom';
import { ButtonDel } from '../../commonComponents/ButtonDelete/ButtonDelete';
import SuperBtn from '../../commonComponents/SuperBtn/SuperBtn';

import {
  CardItem,
  ImageCard,
  ImgContainer,
  MainContainer,
  WrapperButtons,
  TitleRecipe,
  Text,
  WrapperUp,
  Time,
  ButtonDelete,
  SuperBtnWrapper,
} from './MyRecipesItem.styled.js';

export const MyRecipesItem = ({
  thumb,
  category,
  title,
  description,
  time,
  handleDelete,
  id,
}) => {
  const location = useLocation();

  return (
    <CardItem>
      <ImgContainer>
        <ImageCard src={thumb} alt={category} />
      </ImgContainer>
      <MainContainer>
        <WrapperButtons>
          <TitleRecipe>{title}</TitleRecipe>
          <ButtonDelete>
            <ButtonDel
              handleDelete={handleDelete}
              bgColor="#8baa36"
              hoverColor="#EBF3D4"
              iconColor="white"
              iconHoverColor="black"
            />
          </ButtonDelete>
        </WrapperButtons>
        <Text>{description}</Text>
        <WrapperUp>
          <Time>{time} min</Time>
          <SuperBtnWrapper>
            <SuperBtn
              title="See recipe"
              lnk
              to={`/recipe/${id}`}
              statefrom={{ from: location }}
            />
          </SuperBtnWrapper>
        </WrapperUp>
      </MainContainer>
    </CardItem>
  );
};

export default MyRecipesItem;
