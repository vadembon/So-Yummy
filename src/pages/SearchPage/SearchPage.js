import { SearchBar } from 'components/SearchBar';
import { Container } from 'commonComponents/Container';
import { MainTitle } from 'components';
// import { Box } from 'commonComponents/Box';

export const SearchPage = () => {
  return (
    <Container>
      <MainTitle titleName="Search" />
      <SearchBar />
    </Container>
  );
};
export default SearchPage;
