import styled from 'styled-components';

export const BtnDel = styled.button`
  background: #8baa36;
  width: 24px;
  height: 24px;
  border-radius: 4px;
  font-size: 18px;
  border: none;
  outline: none;
  text-align: center;
  //   position: absolute;
  top: 0;
  right: 0;
  padding: 5px;
  margin: 0 auto;
  color: white;
  :hover,
  :focus {
    scale: 1.2;
    background-color: gray;
  }
  @media screen and (min-width: 768px) {
    width: 38px;
    height: 38px;
    padding: 8px;
  }
  @media screen and (min-width: 1440px) {
    width: 44px;
    height: 44px;
    padding: 10px;
  }
`;
