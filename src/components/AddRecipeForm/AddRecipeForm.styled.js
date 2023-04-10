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
  width: ${({ width }) => (width ? width : '100%')};
  height: ${({ height }) => (height ? height : '40px')};
  /* margin-bottom: 24px; */
  border: none;
  border-bottom: 1px solid black;
`;

export const TextForm = styled.textarea`
  width: ${({ width }) => (width ? width : '100%')};
  height: ${({ height }) => (height ? height : '40px')};
  /* margin-bottom: 24px; */
  resize: none;
`;

// export const SelectForm = styled.select`
//   width: ${({ width }) => (width ? width : '100%')};
//   height: ${({ height }) => (height ? height : '40px')};
// `;

export const Box = styled.div`
  display: flex;
  flex-wrap: wrap;
  /* column-gap: 50px; */
  gap: 32px;
  justify-content: center;
  /* justify-content: space-between; */
  align-items: center;
`;

export const VBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
`;

export const TitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 68px;
  margin-bottom: 24px;
`;

export const InstructionBox = styled.div`
  margin-top: 44px;
  margin-bottom: 72px;
`;

export const IngredBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
`;
