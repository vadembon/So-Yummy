import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const CategoriesListWrap = styled.div`
margin-top: 50px;
margin-left: auto;
margin-right: auto;
// max-width: 375px;
overflow: hidden;
border-bottom: 1px solid #E0E0E0;
transform: matrix(1, 0, 0, 1, 0, 0);


@media screen and (min-width: 768px) {
    margin-top: 50px;
    max-width: 768px;
    margin-left: auto;
    margin-right: auto;
  };

@media screen and (min-width: 1440px) {
  max-width: 1240px;
    margin-top: 100px;
    margin-left: auto;
    margin-right: auto;
  };
`

export const CategoryList = styled.ul`
display: flex;
margin-left: 20px;
padding: 10px 10px 48px 10px;
gap: 28px;
margin-bottom: 0px;
height: 56px;
overflow-x: scroll;
 &::-webkit-scrollbar {
 
  display: none;
  z-index: -2;
}

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
// height: 80px;

`
export const CategoryLink = styled(Link)`
position: relative;
display: block;
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 1;
color: #BDBDBD;
transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
&::after {
  position: absolute;
  z-index: 2;
  // margin-top: 22px;
  content: '';
  left: 0;
  top: 46px;
  width: 100%;
  height: 3px;
  background-color: transparent;
}

:hover,
:focus {
  color: #8BAA36;
}
&.active {
  color: #8BAA36;
  &::after {
    background-color: #8BAA36;
  }
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

