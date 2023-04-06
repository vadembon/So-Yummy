import { Nav, Styledlink, ItemNav } from './Footer.styled';

export const Navigation = () => {
  return (
    <Nav>
      <ul>
        <ItemNav>
          <Styledlink to="/search">Ingredients</Styledlink>
        </ItemNav>
        <ItemNav>
          <Styledlink to="/add">Add Recipe</Styledlink>
        </ItemNav>
        <ItemNav>
          <Styledlink to="/my">My Recipes</Styledlink>
        </ItemNav>
        <ItemNav>
          <Styledlink to="/favorite">Favorite Recipes</Styledlink>
        </ItemNav>
        <ItemNav>
          <Styledlink to="/shopping-list">Shopping List</Styledlink>
        </ItemNav>
      </ul>
    </Nav>
  );
};
