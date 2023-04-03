import styled from 'styled-components';
import img from '../../../images/soYummy/bg_top_right_1x_mob.png';

export const Backgroundleaves = styled.div`
  position: absolute;
  min-width: 306px;
  height: 620px;
  left: 68px;
  top: 120px;
  right: 0px;

  /* transform: rotate(42deg); */
  z-index: -4;

  background-image: url(${img});
  background-repeat: no-repeat;
  background-position: right;
  /* background-size: cover; */

  @media (min-width: 768px) {
  }

  @media (min-width: 1280px) {
  }
`;
