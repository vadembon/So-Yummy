import { FormStyled, InputStyled } from './SearchForm.styled';
import { Button } from 'commonComponents/Button';

export const SearchForm = ({ onSubmit, onChange }) => {
  return (
    <FormStyled onSubmit={onSubmit}>
      <InputStyled
        name="searchQuery"
        // value={searchQuery}
        onChange={onChange}
        required
      />
      <Button type="submit">Search</Button>
    </FormStyled>
  );
};

// export const SearchForm = ({ onSubmit }) => {
//   const [searchQuery, setSearchQuery] = useState('');

//   const handleChange = ({ target }) => {
//     const { value } = target;
//     // console.log(value);
//     setSearchQuery(value);
//   };

//   const handleSubmit = e => {
//     e.preventDefault();
//     // console.log(searchQuery);
//     onSubmit(searchQuery);
//     setSearchQuery('');
//   };

//   return (
//     <FormStyled onSubmit={handleSubmit}>
//       <InputStyled
//         name="searchQuery"
//         value={searchQuery}
//         onChange={handleChange}
//         required
//       />
//       <Button type="submit">Search</Button>
//     </FormStyled>
//   );
// };
