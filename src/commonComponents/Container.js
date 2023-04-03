import styled from 'styled-components';

export const Container = styled.div`
  min-width: 320px;
  max-width: ${({ theme: { devices } }) => devices.mobile};
  padding: 0px 16px;
  margin: 0 auto;

  @media (min-width: ${({ theme: { devices } }) => devices.tablet}) {
    max-width: ${({ theme: { devices } }) => devices.tablet};
    padding: 0px 32px;
  }

  @media (min-width: ${({ theme: { devices } }) => devices.desktop}) {
    max-width: ${({ theme: { devices } }) => devices.desktop};
  }
`;
