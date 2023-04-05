import styled from 'styled-components';
import img from '../../../images/soYummy/spinach_top_right_2x_mob.png';

export const RightLeavesDiv = styled.div`
  position: absolute;
  min-width: 375px;
  min-height: 713px;
  top: 0px;
  right: 0px;
  z-index: -2;
  margin-left: 0;

  background-image: url(${img});
  filter: blur(2px);

  background-size: cover;

  @media (min-width: 768px) {
  }

  @media (min-width: 1280px) {
  }
`;
