// import { useCategories } from '../../api/hooks';
// import { Tab, Tabs } from '@mui/material';

// import { Link } from 'react-router-dom';
// import { useEffect } from 'react';
import {
  CategoriesListWrap,
  CategoryList,
  CategoryListItem,
  CategoryLink,
  
} from './CategoriesList.styled';

// export const CategoriesList = (props) => {
//   const { data: categories, error, isLoading } = useCategories();

//   return (<>
//     {error && <div>{error}</div>}
//     {isLoading ? (
//       <div>Loading...</div>
//     ) : (
//       <CategoriesListWrap>
//       <Tabs value={props.value}>
//         {categories?.map(({ id, name }) =>
//           <Tab label={name} value={name} to={`/categories/${name}`} key={id} component={Link} />,
//         )}
//       </Tabs>
//       </CategoriesListWrap>
//     )
//     }
//   </>);
// };

export const CategoriesList = props => {
  return (
    <>
      <CategoriesListWrap>
        <CategoryList value={props.value}>
          {props.categories?.map(({ _id: id, name }) => (
            <CategoryListItem key={id}>
              <CategoryLink
                label={name}
                value={name}
                to={`/categories/${name}`}
              >
                {name}
              </CategoryLink>
            </CategoryListItem>
          ))}
        </CategoryList>
      </CategoriesListWrap>
    </>
  );
};
