import {
  HeaderWrapper,
  ProductsHeader,
  NumberHeader,
  RemoveHeader,
} from './ShoppingListHeader.styled';

export const ShoppingListHeader = () => {
  return (
    <HeaderWrapper>
      <ProductsHeader>Product</ProductsHeader>
      <NumberHeader>Number</NumberHeader>
      <RemoveHeader>Remove</RemoveHeader>
    </HeaderWrapper>
  );
};
