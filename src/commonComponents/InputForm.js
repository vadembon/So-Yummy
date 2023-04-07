import styled from 'styled-components';

export const InputForm = styled.input`
  height: 40px;
  margin-bottom: 24px;
`;

export const TextForm = styled.textarea`
  height: ${({ height }) => (height ? height : '40px')};
  margin-bottom: 24px;
  resize: none;
`;

export const SelectForm = styled.select`
  width: ${({ width }) => (width ? width : '50%')};
  height: ${({ height }) => (height ? height : '40px')};
  required: ${({ required }) => (required ? true : false)};
`;
