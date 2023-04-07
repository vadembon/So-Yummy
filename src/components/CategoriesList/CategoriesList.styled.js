import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const CategoriesListWrap = styled.div`
margin-top: 202px;
margin-left: auto;
margin-right: auto;
max-width: 375px;
overflow: hidden;

@media screen and (min-width: 768px) {
    margin-top: 228px;
    max-width: 768px;
    margin-left: auto;
    margin-right: auto;
  };

@media screen and (min-width: 1440px) {
  max-width: 1240px;
    margin-top: 318px;
    margin-left: auto;
    margin-right: auto;
  };
`

export const CategoryList = styled.ul`
display: flex;
margin-left: 20px;
padding: 10px 10px;
gap: 28px;

@media screen and (min-width: 768px) {
  gap: 55px;
};

@media screen and (min-width: 1440px) {
  margin-left: 20px;
  gap: 55px;

};
`

export const CategoryListItem = styled.li`
// margin-right: 50px;

`
export const CategoryLink = styled(Link)`
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 1;
color: #BDBDBD;
transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),

&:hover,
&:focus {
  color: #8BAA36;
}
&.active {
  color: #8BAA36;
}


@media screen and (min-width: 768px) {
  
  font-size: 18px;
  line-height: 1;

};

@media screen and (min-width: 1440px) {
 
  font-size: 18px;
  line-height: 1;
  
};
`

