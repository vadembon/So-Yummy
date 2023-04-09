import React from 'react';
import {
  SectionPreparationDescription,
  Count,
  Text,
  TextCount,
  RecipePreparationTitle,
} from './RecipePreparation.styled';
import { Container } from 'components/Container';

export const RecipePreparation = ({ description }) => {
  return (
    <Container>
      <SectionPreparationDescription>
      <RecipePreparationTitle>Recipe Preparation</RecipePreparationTitle>
        {description &&
          description.split('. ').map((el, i) => {
            return (
              <li key={i} style={{ display: 'flex', alignItems: 'flex-start' }}>
                <div>
                  <Count>
                    <TextCount>{i + 1}</TextCount>
                  </Count>
                </div>
                <Text>{el}</Text>
              </li>
            );
          })}
      </SectionPreparationDescription>
    </Container>
  );
};
