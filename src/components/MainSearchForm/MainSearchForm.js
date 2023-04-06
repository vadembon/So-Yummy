import { useNavigate } from 'react-router-dom';
import {
  MainSearchFormSection,
  MainSearchInput,
  MainSearchButton,
} from './MainSearchForm.styled';

const SearchForm = () => {
  const navigate = useNavigate();

  const handleSubmit = event => {
    event.preventDefault();

    // if (!event.currentTarget.value) {
    //   return console.log(`Oops, type something`);
    // }

    navigate('/search');
  };

  return (
    <>
      <MainSearchFormSection onSubmit={handleSubmit}>
        <MainSearchInput placeholder="Beef" searchQuery="" name="search" />
        <MainSearchButton type="submit">Search</MainSearchButton>
      </MainSearchFormSection>
    </>
  );
};

export default SearchForm;
