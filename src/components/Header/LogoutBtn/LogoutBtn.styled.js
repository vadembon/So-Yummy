import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
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
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
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
  &:disabled {
    opacity: 0.7;
    pointer-events: none;
  }

  @media screen and (min-width: 768px) {
    width: calc(50% - 8px);
    font-size: 16px;
  }
`;