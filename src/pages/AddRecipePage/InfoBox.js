import styled from 'styled-components';

export const InfoBox = styled.div`
  width: 100%;

  @media (min-width: ${({ theme: { devices } }) => devices.desktop}) {
    width: 320px;
  }
`;
