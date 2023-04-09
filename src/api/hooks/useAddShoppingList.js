import { shoppingList } from './stubs.js';

export const useAddShoppingList = options => {
  const mutate = ({ id, quantity, unit }) => {
    options?.onSuccess?.(shoppingList[0]);
  };
  return { mutate, error: null, isLoading: false };
};
