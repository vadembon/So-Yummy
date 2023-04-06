import { MainPageTitle } from 'components/MainPageTitle';
import { SearchBar } from 'components/SearchBar';
import { Container } from 'components/Container/Container';
// import { Box } from 'commonComponents/Box';

const SearchPage = () => {
  return (
    <Container>
      <MainPageTitle title="Search" />
      <SearchBar />
    </Container>
  );
};
export default SearchPage;
