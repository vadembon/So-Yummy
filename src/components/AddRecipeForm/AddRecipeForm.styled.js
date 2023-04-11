import styled from 'styled-components';

export const Form = styled.form`
  /* & {
    outline: none;
  } */

  /* display: flex; */
  /* flex-direction: column; */
  /* gap: 12px; */
  /* width: 55%; */
`;

// export const DescriptionBox = styled.div`;
//   display: flex;
//   flex-direction: column;
//   /* gap: 12px; */
//   /* width: 55%; */
// `;

export const InputForm = styled.input`
  width: ${({ width }) => (width ? width : '100%')};
  height: ${({ height }) => (height ? height : '40px')};
  margin-left: ${props => (props.marginLeft ? props.marginLeft : 0)}px;
  /* padding: 16px; */
  /* margin-bottom: 24px; */
  outline: none;
  border: none;
  border-bottom: 1px solid black;
`;

export const TextForm = styled.textarea`
  width: ${({ width }) => (width ? width : '100%')};
  height: ${({ height }) => (height ? height : '40px')};
  /* margin-bottom: 24px; */
  border: none;
  outline: none;
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
  @media (min-width: ${({ theme: { devices } }) => devices.tablet}) {
    align-items: start;
  }
`;

export const VBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
  @media (min-width: ${({ theme: { devices } }) => devices.tablet}) {
    gap: 32px;
    width: 393px;
  }
`;

export const TitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 68px;
  margin-bottom: 24px;
  @media (min-width: ${({ theme: { devices } }) => devices.tablet}) {
    margin-top: 100px;
    margin-bottom: 32px;
  }
`;

export const InstructionBox = styled.div`
  /* margin-top: 44px; */
  margin-bottom: 72px;
`;

export const IngredBox = styled.div`
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
  /* gap: 20px; */

  width: 530px;
`;

export const LabelBox = styled.div`
  display: flex;
  align-items: center;
`;

export const Label = styled.div`
  /* width: 200px; */
  flex-basis: 200px;
  flex-grow: 1;
  height: 43px;
  /* padding: 16px; */
  color: black;
  border-bottom: 1px solid black;
`;
