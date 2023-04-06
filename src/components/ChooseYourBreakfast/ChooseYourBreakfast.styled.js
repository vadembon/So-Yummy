import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { theme } from '../../constants/theme';

export const ChooseYourBreakfastContainer = styled.div`
  position: relative;
  width: 225px;
  height: 92px;
  padding: 8px;

  margin: 157px 7px 115px 88px;
  background: ${theme.colors.lightBackground};
  border-radius: 8px;

  @media screen and (min-width: 768px) {
    position: absolute;
    padding: 12px;
    width: 261px;
    height: 100px;
    right: 40px;
    top: 353px;
    margin: 0px;
  }

  @media screen and (min-width: 1440px) {
    padding: 16px;
    width: 298px;
    height: 114px;
    right: 80px;
    top: 460px;
  }
`;

export const ChooseYourBreakfastText = styled.p`
  width: auto;
  font-weight: 500;
  font-size: 13.5px;
  line-height: 18px;
  /* or 150% */

  letter-spacing: -0.24px;

  & span {
    color: ${theme.colors.greenAccent};
  }

  @media screen and (min-width: 768px) {
    width: auto;
    font-size: 14px;
  }

  @media screen and (min-width: 1440px) {
    line-height: 20px;
  }
`;

export const ChooseYourBreakfastLink = styled(Link)`
  font-size: 10px;
  line-height: 12px;
  /* identical to box height, or 120% */

  display: flex;
  align-items: center;
  justify-content: flex-end;
  letter-spacing: 0.2px;

  color: ${theme.colors.secondaryDarkText};
  stroke: ${theme.colors.secondaryDarkText};
  gap: 4px;

  &:hover {
    color: ${theme.colors.greenAccent};
    stroke: ${theme.colors.greenAccent};
  }

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;
