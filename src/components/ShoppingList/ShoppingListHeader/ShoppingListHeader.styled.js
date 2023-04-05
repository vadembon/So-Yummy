import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  background-color: ${props => props.theme.colors.greenAccent};
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  font-size: 12px;
  line-height: 18px;
  color: ${props => props.theme.colors.primaryLightText};
`;

export const ProductsHeader = styled.div`
  font-size: 18px;
  font-weight: bold;
  padding-top: 10px;
  padding-left: 10px;
  padding-bottom: 10px; 
`;

export const NumberHeader = styled.div`
  font-size: 16px;
  margin-left: 10px;
`;

export const RemoveHeader = styled.div`
  font-size: 16px;
  cursor: pointer;
  color: #666;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: #000;
  }
`;