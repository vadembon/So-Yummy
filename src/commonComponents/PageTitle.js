import styled from 'styled-components';

export const PageTitle = styled.h2`
  /* align-self: flex-start; */
  font-family: ${({ theme: { fonts } }) => fonts.primary};
  /* font-size: ${props => props.theme.fontSizes[9]}; */

  font-weight: ${({ theme: { fontWeights } }) => fontWeights.semibold};
  /* text-align: center; */
  color: ${({ theme: { colors } }) => colors.tertiaryDarkText};
`;
