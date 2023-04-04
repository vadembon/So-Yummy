import styled from 'styled-components';

export const Container = styled.div`
  min-height: calc(100vh - 70px);
  max-width: 1200px;
  margin-top: 15px;
  margin-bottom: 15px;
  margin-left: auto;
  margin-right: auto;
  padding: 15px;

  box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
    rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
`;

export const IngredientsList = styled.div`
  margin-bottom: 24px;
  
  background-color: #8baa36;
  border-radius: 8px;

  display: grid;
  grid-template-columns: repeat(3, 2fr);
  grid-column-gap: 1px;
  grid-row-gap: 2em;

  /* display: flex;
  justify-content: center;
  align-items: center; */
`;

export const Ingredients = styled.p`
  ${props => props.theme.fonts.primary}
  ${props => props.theme.fontSizes[3]}px;
  line-height: 27px;
  padding-top: 21px;
  padding-bottom: 21px;
  color: #fafafa;

  margin-left: 15px;

  display: flex;
  justify-content: left;
  align-items: left;

  letter-spacing: 0.03em;
`;

export const Number = styled.p`
  ${props => props.theme.fonts.primary}
  ${props => props.theme.fontSizes[3]}px;
  line-height: 27px;
  color: #fafafa;
  padding-top: 21px;
  padding-bottom: 21px;

  display: flex;
  justify-content: right;
  align-items: right;

  letter-spacing: 0.03em;
`;

export const AddToList = styled.p`
  ${props => props.theme.fonts.primary}
  ${props => props.theme.fontSizes[3]}px;
  line-height: 27px;
  color: #fafafa;
  padding-top: 21px;
  padding-bottom: 21px;

  display: flex;
  justify-content: right;
  align-items: right;

  margin-right: 15px;

  letter-spacing: 0.03em;
`;
