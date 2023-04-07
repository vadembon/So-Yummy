import styled from 'styled-components';

export const TitleBox = styled.div`
  position: relative;
  height: 250px;
  padding-top: 200px;
  /* display: flex; */
  /* align-items: center; */
  /* color: ${({ theme: { colors } }) => colors.primaryLightText}; */
  /* background: ${({ theme: { colors } }) => colors.backgroundLight}; */

  @media (min-width: ${({ theme: { devices } }) => devices.tablet}) {
    height: 276px;
  }

  @media (min-width: ${({ theme: { devices } }) => devices.desktop}) {
    height: 300px;
  }
`;
