import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { theme } from '../../constants/theme';

export const CategoriesList = styled.ul`
  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
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
  color: ${theme.colors.whiteText};
  border-radius: 6px;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;

export const OtherCategories = styled(Link)`
  padding: 14px 32px;
  width: 195px;
  height: 46px;

  font-size: 14px;
  line-height: 21px;
  text-align: center;

  color: ${theme.colors.darkAccent};

  border: 2px solid #8baa36;
  border-radius: 60px 140px 60px 140px;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;
