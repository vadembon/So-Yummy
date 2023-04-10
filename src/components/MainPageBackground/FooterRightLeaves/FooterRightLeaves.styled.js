import styled from 'styled-components';
import imgMob from '../../../images/background/spinach_bottom_right_mob_2x.png';
import imgTab from '../../../images/background/spinach_bottom_right_tab_2x.png';
import imgDesk from '../../../images/background/spinach_bottom_right_desk_2x.png';

export const FooterRightBackgroundleaves = styled.div`
  position: absolute;
  width: 220px;
  height: 190px;
  bottom: -2600px;
  right: 0;
  z-index: -1;
  background-image: url(${imgMob});
  background-repeat: no-repeat;
  background-size: 100%;

  @media screen and (min-width: 768px) {
    width: 380px;
    height: 289px;
    bottom: -2700px;
    background-image: url(${imgTab});
  }

  @media screen and (min-width: 1440px) {
    width: 543px;
    height: 399px;
    bottom: -3135px;
    background-image: url(${imgDesk});
  }
`;
