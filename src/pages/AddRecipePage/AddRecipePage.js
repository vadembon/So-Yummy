import { Box } from 'commonComponents/Box';
import { Container } from 'commonComponents/Container';
import { Spinach } from 'commonComponents/Spinach';
import { AddRecipeForm } from 'components/AddRecipeForm';
import { TopBox } from 'commonComponents/TopBox';

const style = {
  height: 50,
  padding: 12,
  textAlign: 'center',
  color: 'grey',
  background: 'aqua',
  fontSize: 20,
};

export const AddRecipePage = () => {
  return (
    <>
      <div style={style}>This is a AddRecipePage</div>
      <Container>
        <TopBox />
        <Box>
          <AddRecipeForm />
          <ul name="popularRecipeList"></ul>
          <Spinach />
        </Box>
      </Container>
    </>
  );
};
