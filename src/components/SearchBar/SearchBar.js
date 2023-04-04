import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { SearchForm } from 'components/SearchForm';
import SearchTypeSelector from 'components/SearchTypeSelector/SearchTypeSelector';

import { WrapperSearchBar } from './SearchBar.styled';

export const SearchBar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get('query');

  const updateSearch = query => {
    console.log(query);
    setSearchParams({
      query,
    });
  };

  const handleTypeChange = option => {
    console.log(option);
  };

  return (
    <WrapperSearchBar>
      <SearchForm onSubmit={updateSearch} />
      <SearchTypeSelector
        defaultValue={{ value: 'title', label: 'Title' }}
        onChange={handleTypeChange}
      />
    </WrapperSearchBar>
  );
};

// options = { options };
// defaultValue = { defaultValue };
// value = { value };
// onChange = { onChange };
// styles = { customStyles };
// isSearchable;
