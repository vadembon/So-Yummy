import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ChooseYourBreakfastContainer = styled.div`
  position: absolute;
  width: 225px;
  height: 92px;
  left: 116px;
  top: 380px;
  padding: 8px;

  background: #fafafa;
  border-radius: 8px;

  @media (min-width: 768px) {
  }

  @media (min-width: 1280px) {
  }
`;

export const ChooseYourBreakfastText = styled.p`
  width: 209px;
  font-weight: 500;
  font-size: 13.5px;
  line-height: 18px;
  /* or 150% */

  letter-spacing: -0.24px;

  & span {
    color: #8baa36;
  }

  @media (min-width: 768px) {
  }

  @media (min-width: 1280px) {
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

  color: #3e4462;

  gap: 4px;

  &:hover {
    color: #8baa36;
    fill: #8baa36;
  }

  @media (min-width: 768px) {
  }

  @media (min-width: 1280px) {
  }
`;
