import styled from 'styled-components';
import { stheme } from 'simpleImages/stheme';

export const ImageButton = styled.img`
  width: 279px;
  height: 268px;
  align-self: center;
  margin-bottom: 32px;
  object-fit: contain;
  alt: 'image';
  @media (min-width: ${stheme.devices.tablet}) {
    align-self: start;
  }
  @media (min-width: ${stheme.devices.desktop}) {
    width: 357px;
    height: 344px;
  }
`;
