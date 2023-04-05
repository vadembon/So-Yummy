import { useCategories } from '../../api/hooks';
import { Tab, Tabs } from '@mui/material';
import { Link } from 'react-router-dom';
// import { useEffect } from 'react';
import {CategoriesListWrap} from "./CategoriesList.styled";

export const CategoriesList = (props) => {
  const { data: categories, error, isLoading } = useCategories();

  return (<>
    {error && <div>{error}</div>}
    {isLoading ? (
      <div>Loading...</div>
    ) : (
      <CategoriesListWrap>
      <Tabs value={props.value}>
        {categories?.map(({ id, name }) =>
          <Tab label={name} value={name} to={`/categories/${name}`} key={id} component={Link} />,
        )}
      </Tabs>
      </CategoriesListWrap>
    )
    }
  </>);
};