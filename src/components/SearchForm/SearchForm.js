import {
  SearchFormSection,
  SearchInput,
  SearchButton,
} from './SearchForm.styled';

export const SearchForm = ({ onSubmit, color, defaultValue = '' }) => {
  return (
    <SearchFormSection onSubmit={onSubmit}>
      <SearchInput name="query" defaultValue={defaultValue} required />
      <SearchButton type="submit" color={color}>
        Search
      </SearchButton>
    </SearchFormSection>
  );
};
