import styled from 'styled-components';
import { stheme } from 'simpleImages/stheme';

export const TitleBox = styled.div`
  position: relative;
  height: 150px;
  padding: 100px 16px 0px;
  /* display: flex; */
  /* align-items: center; */
  /* color: ${({ theme: { colors } }) => colors.primaryLightText}; */
  /* background: ${({ theme: { colors } }) => colors.backgroundLight}; */

  @media (min-width: ${stheme.devices.tablet}) {
    height: 176px;
    padding: 100px 32px 0px;
  }

  @media (min-width: ${stheme.devices.desktop}) {
    height: 200px;
  }
`;
