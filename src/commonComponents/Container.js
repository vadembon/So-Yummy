import styled from 'styled-components';
import { stheme } from 'simpleImages/stheme';

export const Container = styled.div`
  min-width: ${stheme.devices.minDevice};
  max-width: ${stheme.devices.mobile};
  padding: 0px 16px;
  margin: 0 auto;

  @media (min-width: ${stheme.devices.tablet}) {
    max-width: ${stheme.breakPoints.tablet};
    padding: 0px 32px;
  }

  @media (min-width: ${stheme.devices.desktop}) {
    max-width: ${stheme.breakPoints.desktop};
  }
`;
