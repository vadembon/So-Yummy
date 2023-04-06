import { useState } from 'react';
import Select from 'react-select';
// import { useSearchParams } from 'react-router-dom';
// import styled from 'styled-components';

const customStyles = {
  control: (provided, state) => ({
    ...provided,

    border: 'none',
    boxShadow: 'none',
    borderBottom: state.isFocused ? 'none' : '1px solid #ccc',
    borderRadius: '5px',
    minHeight: 'initial',
    backgroundColor: '#d9d9d9',
    width: '198px',
    height: '49px',
  }),

  option: (provided, state) => ({
    ...provided,
    // backgroundColor: 'transparent',
    // color: state.isSelected ? '#fff' : '#000',

    width: 198,
    userSelect: 'none',
    cursor: 'pointer',

    backgroundColor: 'white',
    color: 'black',
    fontSize: '14px',
  }),

  dropdownIndicator: provided => ({
    ...provided,
    color: '#8BAA36',
    paddingRight: '14px',
    paddingLeft: 0,
    ':before': {
      content: 'none',
    },
    ':after': {
      content: 'none',
    },
  }),

  // singleValue: (provided, state) => ({
  //   ...provided,
  //   // backgroundColor: 'yellow', // изменение цвета выделения
  //   color: 'black', // изменение цвета текста выбранного значения
  //   fontWeight: 'bold', // изменение стиля шрифта
  //   fontSize: '18px', // изменение размера шрифта
  // }),

  menu: provided => ({
    ...provided,
    width: 198, // задаем желаемую ширину
    border: 'none', // убираем рамку
    boxShadow: 'none', // убираем тень
    backgroundColor: 'white',
    color: 'black',
  }),

  indicatorSeparator: provided => ({
    ...provided,
    display: 'none',
  }),
};

// const StyledSelect = styled(Select)`
//   .react-select__control {
//     border: none;
//     border-radius: 0;
//     box-shadow: none;
//     &:hover {
//       border: none;
//     }
//   }
//   .react-select__menu {
//     border: none;
//     box-shadow: none;
//     margin-top: 0;
//   }
//   .react-select__option {
//     color: #000;
//     &:hover {
//       background-color: #f2f2f2;
//     }
//   }

//   .Select__menu {
//     color: #3c3d3e;
//     height: 49px;
//     width: 198px;
//   }
// `;

const SearchTypeSelector = ({ onChange }) => {
  const options = [
    { value: 'title', label: 'Title' },
    { value: 'ingredients', label: 'Ingredients' },
  ];
  // const [searchParams, setSearchParams] = useSearchParams();
  const [selectedOption, setSelectedOption] = useState({
    value: 'title',
    label: 'Title',
  });

  const handleOptionChange = option => {
    // console.log(option);
    // console.log(selectedOption);
    setSelectedOption(option);
    onChange(option);
  };

  return (
    <Select
      // classNamePrefix="Select"
      options={options}
      value={selectedOption}
      onChange={handleOptionChange}
      defaultValue={{ value: 'title', label: 'Title' }}
      styles={customStyles}
      isSearchable
    />
  );
};

export default SearchTypeSelector;
