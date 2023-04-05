import { Container } from 'components/Container/Container';
import { ShoppingListHeader } from './ShoppingListHeader/ShoppingListHeader';
import { useShoppingList } from 'api/hooks';
import { ShoppingListItem } from './ShoppingListItem';
 
export const ShoppingList = () => {
  const { data: ingredients, error, isLoading } = useShoppingList();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <Container>
      <ShoppingListHeader />

      <ul>
        {ingredients.map(ingredient => (
          <ShoppingListItem
            key={ingredient.id}
            name={ingredient.name}
            quantity={ingredient.quantity}
            unit={ingredient.unit}
            image={ingredient.image}
          />
        ))}
      </ul>
    </Container>
  );
};
