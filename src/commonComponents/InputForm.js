import styled from 'styled-components';

export const InputForm = styled.input`
  /* width: 100%; */
  height: 40px;
  margin-bottom: 24px;
`;

export const TextForm = styled.textarea`
  /* width: 100%; */
  height: 40px || ${props => props.height};
  margin-bottom: 24px;
  resize: none;

  ${({ height }) =>
    height &&
    `
    height: ${height};
  `}
`;

export const SelectForm = styled.select`
  /* width: 100%; */
  height: 40px;
  margin-bottom: 24px;
  ${({ height }) =>
    height &&
    `
    height: ${height};
  `}
`;
