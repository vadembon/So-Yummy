import React, { useState } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
// import { ToastContainer, toast } from 'react-toastify';

// import 'react-toastify/dist/ReactToastify.css';

import { SearchForm } from 'components/SearchForm';
import SearchTypeSelector from 'components/SearchTypeSelector/SearchTypeSelector';
import { WrapperSearchBar, WrapperSelector } from './SearchBar.styled';
import { SearchedRecipesList } from 'components/SearchedRecipesList';
import { useRecipes } from 'api/hooks';

export const SearchBar = () => {
  const { state } = useLocation();
  // const [recipes, setRecipes] = useState([]);
  const [selectedOption, setSelectedOption] = useState({
    value: state ? 'ingredient' : 'title',
    label: state ? 'Ingredient' : 'Title',
  });

  const [searchParams, setSearchParams] = useSearchParams({});
  const title = searchParams.get('title') ?? '';
  const ingredient = searchParams.get('ingredient') ?? '';
  const filter = ingredient ? { ingredient, limit: 12 } : { title, limit: 12 };
  const { data, isLoading } = useRecipes(filter);

  console.log(data);
  // useEffect(() => {
  //   if (!data || data.length === 0) {
  //     toast('Not found recipes! Try again!');
  //   } else {
  //     setRecipes(data);
  //   }
  // }, [data]);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const valueForm = form.elements.query.value;

    setSearchParams({ [selectedOption.value]: valueForm });
    // console.log(valueForm, selectedOption);
    form.reset();
  };

  const handleTypeChange = option => {
    setSelectedOption(option);
  };

  return (
    <>
      <WrapperSearchBar>
        <SearchForm
          onSubmit={handleSubmit}
          // onChange={handleChange}
          color={'#8baa36'}
          defaultValue={title ? title : ingredient}
        />
        <WrapperSelector>
          <span style={{ fontSize: '18px', fontWeight: '500' }}>
            Search by:
          </span>
          <SearchTypeSelector
            onChange={handleTypeChange}
            selectedOption={selectedOption}
          />
        </WrapperSelector>
        {/* <ToastContainer /> */}
      </WrapperSearchBar>
      {isLoading && <div>Loading...</div>}
      {data && <SearchedRecipesList items={data} />}
    </>
  );
};

// export const SearchBar = () => {
//   const [searchParams, setSearchParams] = useSearchParams();
//   const { data } = useRecipes(searchParams);
//   // console.log(data);

//   const search = searchParams.get('search');
//   // console.log(search);

//   // const type = searchParams.get('value');
//   // console.log(searchParams);

//   const updateSearch = search => {
//     // console.log(search);
//     setSearchParams(search !== '' ? { search } : {});
//   };

//   const handleTypeChange = ({ value }) => {
//     console.log(value);
//     if (value === 'title') {
//       setSearchParams({
//         [value]: search,
//       });
//     } else if (value === 'ingredient') {
//       setSearchParams({
//         [value]: search,
//       });
//     }

//     // setSearchParams({
//     //   [value]: search,
//     // });
//   };

//   return (
//     <WrapperSearchBar>
//       <SearchForm onSubmit={updateSearch} />
//       <div style={{ display: 'flex' }}>
//         <span style={{ fontSize: '18px', fontWeight: '500' }}>Search by:</span>
//         <SearchTypeSelector onChange={handleTypeChange} />
//       </div>
//       <SearchedRecipesList items={data} />
//     </WrapperSearchBar>
//   );
// };

// моя форма первоначальная
// export const SearchBar = () => {
//   const [query, setQuery] = useState('');
//   const [searchParams, setSearchParams] = useSearchParams({});
//   const { data } = useRecipes(searchParams);

//   const handleChange = ({ target }) => {
//     const { value } = target;
//     setQuery(value);
//   };

//   const handleSubmit = e => {
//     e.preventDefault();
//     setSearchParams({ search: query });
//   };

//   const handleTypeChange = ({ value }) => {
//     const firstParam = searchParams.get('search');
//     const newArr = { search: firstParam, [value]: firstParam };

//     setSearchParams(newArr);
//   };

//   return (
//     <WrapperSearchBar>
//       <SearchForm onSubmit={handleSubmit} onChange={handleChange} />
//       <div style={{ display: 'flex' }}>
//         <span style={{ fontSize: '18px', fontWeight: '500' }}>Search by:</span>
//         <SearchTypeSelector onChange={handleTypeChange} />
//       </div>
//       <SearchedRecipesList items={data} />
//     </WrapperSearchBar>
//   );
// };
