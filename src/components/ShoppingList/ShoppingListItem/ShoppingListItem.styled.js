import styled from 'styled-components';

export const ShoppingItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px;
  background-color: ${props => props.theme.colors.primaryLightText};
  border-radius: 8px;
  margin-bottom: 10px;
  

  li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }
`;
export const ProductFoto = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
`;

export const ProductName = styled.p`
  font-size: 18px;
  font-weight: bold;
`;

export const ProductNumber = styled.p`
  font-size: 16px;
  font-weight: 500;
`;

export const RemoveButton = styled.button`
  padding: 10px 20px;
  cursor: pointer;

`;
export const RemoveItemButton = styled.button`
   border: none;
  padding: 10px 20px;
  cursor: pointer;
`;

