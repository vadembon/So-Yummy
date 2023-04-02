import { shoppingList } from './stubs.js';

export const useAddShoppingList = cb => {
  const mutate = ({ id, quantity, unit }) => {
    cb?.onSuccess?.(shoppingList[0]);
  };
  return { mutate, error: null, isLoading: false };
};
