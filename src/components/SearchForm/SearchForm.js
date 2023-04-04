import { useState } from 'react';

import styled from 'styled-components';

// import {
//   Form,
//   Wrapper,
//   Input,
//   Button,
//   Label,
// } from '../SearchBox/SearchBox.styled';

const StyledSelect = styled.select`
  // Стили для select
  width: 200px;
  height: 30px;
  background-color: #ffffff;
  border: 1px solid #cccccc;
  border-radius: 5px;
  padding: 5px;
  font-size: 16px;
  color: #333333;

  /* Установите свойства для option */

  option::selection {
    background-color: transparent;
  }

  option::-moz-selection {
    background-color: transparent;
  }

  option {
    background-color: transparent;
    &:hover {
      background-color: #f1f1f1;
    }
    &:focus {
      background-color: #f1f1f1;
      outline: none;
    }
  }
`;

export const SearchForm = ({ onSubmit }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleChange = ({ target }) => {
    const { value } = target;
    console.log(value);
    setSearchQuery(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(searchQuery);
    setSearchQuery('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="searchQuery"
        value={searchQuery}
        onChange={handleChange}
        required
      />
      <button type="submit">Search</button>
    </form>
  );
};
