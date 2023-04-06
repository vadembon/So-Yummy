
import { ShoppingListHeader } from './ShoppingListHeader/ShoppingListHeader';
import { useShoppingList } from 'api/hooks';
import { ShoppingListItem } from './ShoppingListItem';
// import { PageTitle } from 'commonComponents/PageTitle';
import {SectionTitle} from 'commonComponents/SectionTitle'
import {theme} from "constants/theme"

import { Box } from './ShoppingList.styled'
// import { ContainerDots } from 'commonComponents/BackgroundDots/BackgroundDots.styled';
 import { Container } from 'commonComponents/Container';
 
export const ShoppingList = () => {
  const { data: ingredients, error, isLoading } = useShoppingList();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }
 const titleStyle = {
  display: 'flex',
  marginTop: '106px',
  marginBottom: '50px',
  fontSize: theme.fontSizes[10] + 'px',
  fontFamily: theme.fonts.primary,
  fontWeight: theme.fontWeights.semibold,
  color: theme.colors.tertiaryDarkText,

  [theme.devices.tablet]: {
    marginTop: '73px',
    marginBottom: '72px',
    fontSize: theme.fontSizes[11] + 'px',
    lineHeight: '32px',
  },

  [theme.devices.desktop]: {
    marginTop: '102px',
    marginBottom: '72px',
    fontSize: theme.fontSizes[12] + 'px',
    lineHeight: '44px',
  }
};

  return (
    <Container>
      {/* <ContainerDots> */}
        <Box>
          <SectionTitle style={titleStyle}>Shopping List</SectionTitle>
        </Box>
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
      {/* </ContainerDots> */}
    </Container>
  );
};
