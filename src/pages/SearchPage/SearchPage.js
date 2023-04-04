import { MainPageTitle } from 'components/MainPageTitle';
import { SearchBar } from 'components/SearchBar';
import { Container } from 'components/Container/Container';
import { WrapperSearchBar } from 'components/SearchBar/SearchBar.styled';

const SearchPage = () => {
  return (
    <Container>
      <MainPageTitle title="Search" />
      <WrapperSearchBar>
        <SearchBar />
      </WrapperSearchBar>
    </Container>
  );
};
export default SearchPage;
