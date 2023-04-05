import styled from 'styled-components';

export const TitleBox = styled.div`
  position: relative;
  height: 150px;
  padding: 100px 16px 0px;
  /* display: flex; */
  /* align-items: center; */
  /* color: ${({ theme: { colors } }) => colors.primaryLightText}; */
  /* background: ${({ theme: { colors } }) => colors.backgroundLight}; */

  @media (min-width: ${({ theme: { devices } }) => devices.tablet}) {
    height: 176px;
    padding: 100px 32px 0px;
  }

  @media (min-width: ${({ theme: { devices } }) => devices.desktop}) {
    height: 200px;
  }
`;
