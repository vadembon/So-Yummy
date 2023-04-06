import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const CategoriesListWrap = styled.div`
margin-top: 202px;

@media screen and (min-width: 768px) {
    margin-top: 228px;
  };

@media screen and (min-width: 1440px) {
    margin-top: 318px;
  };
`

export const CategoryList = styled.ul`
`

export const CategoryListItem = styled.li`

`
export const CategoryLink = styled(Link)`
`