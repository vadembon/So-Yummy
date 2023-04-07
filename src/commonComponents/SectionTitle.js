import styled from 'styled-components';

export const SectionTitle = styled.h3`
  /* align-self: flex-start; */
  margin-bottom: 8px;
  font-family: ${({ theme: { fonts } }) => fonts.primary};
  font-size: 24px;
  font-weight: ${({ theme: { fontWeights } }) => fontWeights.semibold};
  color: ${({ theme: { colors } }) => colors.secondaryDarkText};

  @media (min-width: ${({ theme: { devices } }) => devices.desktop}) {
    margin-bottom: 16px;
  }
`;
