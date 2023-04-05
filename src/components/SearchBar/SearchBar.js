import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { SearchForm } from 'components/SearchForm';
import SearchTypeSelector from 'components/SearchTypeSelector/SearchTypeSelector';

import { WrapperSearchBar } from './SearchBar.styled';
import { SearchedRecipesList } from 'components/SearchedRecipesList';
import { useRecipes } from 'api/hooks';

export const SearchBar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { data } = useRecipes(searchParams);
  // console.log(data);

  const search = searchParams.get('search');
  // console.log(search);

  // const type = searchParams.get('value');
  // console.log(searchParams);

  const updateSearch = search => {
    // console.log(search);
    setSearchParams(search !== '' ? { search } : {});
  };

  const handleTypeChange = ({ value }) => {
    console.log(value);
    if (value === 'title') {
      setSearchParams({
        [value]: search,
      });
    } else if (value === 'ingredient') {
      setSearchParams({
        [value]: search,
      });
    }
  };

  return (
    <WrapperSearchBar>
      <SearchForm onSubmit={updateSearch} />
      <div style={{ display: 'flex' }}>
        <span style={{ fontSize: '18px', fontWeight: '500' }}>Search by:</span>
        <SearchTypeSelector onChange={handleTypeChange} />
      </div>
      <SearchedRecipesList items={data} />
    </WrapperSearchBar>
  );
};

// import { useRecipes } from '../hooks';
// import { useState } from 'react';

// export const RecipesTest = () => {
//   const [filter, setFilter] = useState({
//     title: '',
//     ingredient: '',
//     page: 1,
//     limit: 12,
//   });
//   const { data, isLoading } = useRecipes(filter);

//   return (
//     <>
//       <button
//         onClick={() => setFilter(prev => ({ ...prev, title: 'chicken' }))}
//       >
//         Search
//       </button>
//       {isLoading && <p>Loading... </p>}
//       {data && data.map(item => <div>{item.title}</div>)}
//     </>
//   );
// };
