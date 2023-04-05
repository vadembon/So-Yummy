import styled from 'styled-components';

export const UserMenu = styled.div`
  position: absolute;
  top: calc(100% + 14px);
  right: 0;
  transform: translateX(-50px);
  display: flex;
  flex-direction: column;
  padding: 18px;
  gap: 28px;
  border: 1px solid #8baa36;
  border-radius: ${p => p.theme.radii.l};
  @media screen and (min-width: 768px) {
    gap: 32px;
  }
`;

export const EditBtn = styled.button`
  display: flex;
  box-sizing: border-box;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  white-space: nowrap;
  cursor: pointer;
`;

export const LogOutBtn = styled.button`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 10px;
  white-space: nowrap;
  padding: 12px 30px;
  outline: none;
  border: 1px solid transparent;
  border-top-left-radius: 30px;
  border-top-right-radius: 80px;
  border-bottom-left-radius: 80px;
  border-bottom-right-radius: 30px;
  text-align: center;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
  @media screen and (min-width: 1440px) {
    font-size: 16px;
  }
`;