import styled from 'styled-components';
import img from '../../../images/soYummy/bowl_veg_top_right_1x_mob.png';

export const MainPictureDiv = styled.div`
  position: absolute;
  width: 320px;
  height: 296px;
  left: 50%;
  top: 268px;

  z-index: -1;

  background-image: url(${img});
  transform: translateX(-50%);

  @media (min-width: 768px) {
  }

  @media (min-width: 1280px) {
  }
`;
