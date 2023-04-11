import { useShoppingList } from '../../api/hooks/useShoppingList';
import { ShoppingListHeader } from './ShoppingListHeader/ShoppingListHeader';
import { ShoppingListItem } from './ShoppingListItem';

// import { Box } from './ShoppingList.styled';
import { Container } from 'commonComponents/Container';
import { Loader } from 'components/Loader';

export const ShoppingList = () => {
  const {data, isLoading} = useShoppingList()
  const shoppingList = data
    // const summaryList = []
    // console.log(shoppingList);
  
  // console.log(error);

    if (isLoading) {
      return <Loader/>
        }

     console.log(shoppingList);
  return (
    <Container>

      <ShoppingListHeader />
      <ul>
        {shoppingList &&
     
          shoppingList.map(item => (
            <ShoppingListItem
              key={item.id}
              name={item.ttl}
              unit={item.measure}
              image={item.thb}
              recipe= {item.recipe}
            />
          ))}
      </ul>
 
    </Container>
  );
}
        