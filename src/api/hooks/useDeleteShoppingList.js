import { shoppingList } from './stubs.js';

export const useDeleteShoppingList = options => {
  const mutate = ({ id, quantity, unit }) => {
    options?.onSuccess?.(shoppingList[0]);
  };
  return { mutate, error: null, isLoading: false };
};
