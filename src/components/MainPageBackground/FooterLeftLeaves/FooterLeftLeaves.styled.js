import styled from 'styled-components';
import imgMob from '../../../images/background/spinach_bottom_left_mob_1x.png';
import imgTab from '../../../images/background/spinach_bottom_left_tab_1x.png';
import imgDesk from '../../../images/background/spinach_bottom_left_desk_1x.png';

export const FooterLeftBackgroundleaves = styled.div`
  position: absolute;
  z-index: -4;
  width: 206px;
  height: 402px;
  bottom: -2210px;
  left: 0;
  /* top: 2991px; */
  /* transform: rotate(149deg); */
  background-image: url(${imgMob});

  @media screen and (min-width: 768px) {
    background-image: url(${imgTab});
    width: 266px;
    height: 432px;
    bottom: -2180px;
  }

  @media screen and (min-width: 1440px) {
    width: 466px;
    height: 532px;
    bottom: -2610px;
    background-image: url(${imgDesk});
  }
`;
