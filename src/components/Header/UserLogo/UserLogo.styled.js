import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  margin-right: 24px;
  gap: 14px;
  font-size: 14px;
  cursor: pointer;

  & img {
    width: 34px;
    height: 34px;
    border-radius: ${p => p.theme.radii.round};
    
  }
  
  @media screen and (min-width: 768px) {
    margin-right: 50px;
    & img {
      width: 44px;
      height: 44px;
    }
  }
`;

