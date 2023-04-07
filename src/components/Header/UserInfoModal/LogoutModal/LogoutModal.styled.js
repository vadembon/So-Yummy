import styled from 'styled-components';

export const ContentWrapper  = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  @media screen and (min-width: 768px) {
    gap: 32px;
  }
`;

export const Text = styled.p`
  font-size: 14px;
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  @media screen and (min-width: 768px) {
    gap: 16px;
  }
`;

export const Button = styled.button`
  width: calc(50% - 4px);
  padding: 14px;
  font-size: 14px;
  white-space: nowrap;
  cursor: pointer;
  transition: ${p => p.theme.transitions.main};
  &:disabled {
    opacity: 0.7;
    pointer-events: none;
  }

  @media screen and (min-width: 768px) {
    width: calc(50% - 8px);
    font-size: 16px;
  }
`;