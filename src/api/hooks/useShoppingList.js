import { shoppingList } from './stubs.js';
export const useShoppingList = cb => {
  const data = shoppingList;
  cb?.onSuccess?.(data);
  return { data, error: null, isLoading: false };
};
