import styled from 'styled-components';

export const Box = styled.div`
  position: relative;
  height: 2600px;
  /* height: 100vh; */
  /* padding: 20px 20px; */
  color: ${({ theme: { colors } }) => colors.primaryLightText};
  /* background: ${({ theme: { colors } }) => colors.backgroundLight}; */
  overflow: hidden;
`;
