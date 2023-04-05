import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
  SearchFormSection,
  SearchInput,
  SearchButton,
} from './SearchForm.styled';
import { updateSearchQuery } from '../../redux/searchSlice';

const SearchForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    if (!event.currentTarget.value) {
      return console.log(`Oops, type something`);
    }
    dispatch(updateSearchQuery(event.target.search.value));
    navigate('/search');
  };

  return (
    <>
      <SearchFormSection onSubmit={handleSubmit}>
        <SearchInput placeholder="Beef" searchQuery="" name="search" />
        <SearchButton type="submit">Search</SearchButton>
      </SearchFormSection>
    </>
  );
};

export default SearchForm;
