import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  background-color: #f5f5f5;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const StyledLink1 = styled(Link)`
  background-color: #4caf50;
  color: white;
  padding: 12px 24px;
  border-radius: 4px;
  font-size: 16px;
  margin: 0 16px;
  cursor: pointer;
`;


export const StyledLink2 = styled(Link)`
  background-color: #4caf50;
  color: white;
  padding: 12px 24px;
  border-radius: 4px;
  font-size: 16px;
  margin: 0 16px;
  cursor: pointer;
  border: none
`;