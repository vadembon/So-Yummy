import styled from 'styled-components';
import img from '../../../images/soYummy/spinach_top_left_2x_mob.png';

export const LeftleavesDiv = styled.div`
  position: absolute;
  top: -10px;
  left: 0;
  z-index: -2;
  width: 48px;
  height: 202px;

  background-image: url(${img});
  background-size: cover;

  @media (min-width: 768px) {
  }

  @media (min-width: 1280px) {
  }
`;
