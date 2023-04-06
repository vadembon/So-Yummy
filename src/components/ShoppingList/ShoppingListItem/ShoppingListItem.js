import {
  ProductFoto,
  ProductName,
  ProductNumber,
  RemoveItemButton,
  ShoppingItemContainer,
  ProductFotoWrapper,
  RemoveIconWrapper
} from './ShoppingListItem.styled';



export const ShoppingListItem = ({ name, quantity, unit, image, id }) => {
    return (
      <ShoppingItemContainer>
        <li>
          <ProductFotoWrapper>
            <ProductFoto src={image} alt={name} />
          </ProductFotoWrapper>

          <ProductName>{name}</ProductName>

          <ProductNumber>
            {quantity} {unit}
          </ProductNumber>
          <RemoveItemButton id={id}>
            {' '}
            <RemoveIconWrapper />
           </RemoveItemButton>
        </li>
      </ShoppingItemContainer>
    );
};
