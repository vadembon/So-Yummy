import {
  ProductFoto,
  ProductName,
  ProductNumber,
  RemoveItemButton,
  ShoppingItemContainer,
} from './ShoppingListItem.styled';



export const ShoppingListItem = ({ name, quantity, unit, image, id }) => {
    return (
      <ShoppingItemContainer>
        <li>
          <ProductFoto src={image} alt={name} />
          <ProductName>{name}</ProductName>
          <ProductNumber>
            {quantity} {unit}
          </ProductNumber>
          <RemoveItemButton id={id} />
        </li>
      </ShoppingItemContainer>
    );
};
