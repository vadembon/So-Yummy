import styled from 'styled-components';
import { RecipeIngredientsFields } from './RecipeIngredientsFields';
import iconClose from 'images/commonSvgImg/Icon_close.svg';

export const IngredientList = ({
  ingredientList,
  myIngredients,
  handleIngradientDelete,
  handleAutoinput,
}) => {
  return (
    <List>
      {myIngredients.map((item, idx) => (
        <Item
          key={idx}
          {...item}
          idx={idx}
          Delete={handleIngradientDelete}
          handleAutoinput={handleAutoinput}
          ingredientList={ingredientList}
        ></Item>
      ))}
    </List>
  );
};

const Item = ({ idx, Delete, ingredientList, handleAutoinput }) => {
  return (
    <ListItem>
      <RecipeIngredientsFields
        idx={idx}
        ingredientList={ingredientList}
        handleAutoinput={handleAutoinput}
      />
      <Close
        src={iconClose}
        alt="delete ingredient"
        onClick={() => Delete(idx)}
      />
    </ListItem>
  );
};

const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

const ListItem = styled.li`
  display: flex;
  gap: 10px;
  justify-content: space-between;
`;

const Close = styled.img`
  width: 10px;
  /* height: auto; */
  /* border-radius: 50%; */
  /* transition: transform 0.5s ease-in-out; // add a transition for smooth animation */
  /* transform: ${({ rotate }) => rotate === 'true' && 'rotate(180deg)'}; */
`;
