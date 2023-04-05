import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const CategoriesList = styled.ul`
  margin-bottom: 40px;

  @media (min-width: 768px) {
  }

  @media (min-width: 1280px) {
  }
`;

export const CategoriesLink = styled(Link)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px 24px;
  gap: 8px;

  width: 94px;
  height: 38px;

  background: #8aa936;
  color: white;
  border-radius: 6px;

  @media (min-width: 768px) {
  }

  @media (min-width: 1280px) {
  }
`;

export const OtherCategories = styled(Link)`
  padding: 14px 32px;
  width: 195px;
  height: 46px;

  font-size: 14px;
  line-height: 21px;
  text-align: center;

  color: #22252a;

  border: 2px solid #8baa36;
  border-radius: 9% 21% 10% 22% / 39% 63% 30% 59%;

  @media (min-width: 768px) {
  }

  @media (min-width: 1280px) {
  }
`;
