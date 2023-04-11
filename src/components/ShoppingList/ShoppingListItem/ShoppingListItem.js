import { useDeleteShoppingList } from 'api/hooks/useDeleteShoppingList';
import {
  ProductFoto,
  ProductName,
  ProductNumber,
  RemoveItemButton,
  ShoppingItemContainer,
  ProductFotoWrapper,
  RemoveIconWrapper,
  // Box
} from './ShoppingListItem.styled';

import { Loader } from 'components/Loader';

export const ShoppingListItem = ({ id, name, unit, image, recipe }) => {
  const { mutate, isLoading } = useDeleteShoppingList();

  const handleDeleteClick = e => {
    mutate([{ id, recipe }]);
    
    if (isLoading) {
      return <Loader />;
    }
  };

  return (
    <ShoppingItemContainer>
      <li>
        <ProductFotoWrapper>
          <ProductFoto src={image} alt={name} />
        </ProductFotoWrapper>

        <ProductName>{name}</ProductName>

        {/* <Box> */}
        <ProductNumber>{unit}</ProductNumber>
        <RemoveItemButton
          type="button"
          id={id}
          onClick={handleDeleteClick}
          disabled={isLoading}
        >
          {isLoading ? <Loader /> : <RemoveIconWrapper />}
        </RemoveItemButton>
        {/* </Box> */}
      </li>
    </ShoppingItemContainer>
  );
};
