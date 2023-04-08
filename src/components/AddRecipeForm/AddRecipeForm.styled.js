import styled from 'styled-components';

export const Form = styled.form`
  /* display: flex; */
  /* flex-direction: column; */
  /* gap: 12px; */
  /* width: 55%; */
`;

// export const DescriptionBox = styled.div`
//   display: flex;
//   flex-direction: column;
//   /* gap: 12px; */
//   /* width: 55%; */
// `;

export const InputForm = styled.input`
  height: 40px;
  /* margin-bottom: 24px; */
`;

export const TextForm = styled.textarea`
  width: ${({ width }) => (width ? width : '100%')};
  height: ${({ height }) => (height ? height : '40px')};
  /* margin-bottom: 24px; */
  resize: none;
`;

export const SelectForm = styled.select`
  width: ${({ width }) => (width ? width : '100%')};
  height: ${({ height }) => (height ? height : '40px')};
`;

export const Box = styled.div`
  display: flex;
  gap: 50px;
  justify-content: space-between;
`;

export const VBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;
