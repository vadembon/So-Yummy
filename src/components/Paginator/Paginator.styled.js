import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
`;

export const Button = styled.button`
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 3px;
  color: #333;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  margin: 0 10px;
  padding: 8px 12px;

  &:hover {
    background-color: #eee;
  }

  &:disabled {
    color: #999;
    border-color: #999;
    cursor: not-allowed;
  }
`;
