import styled from 'styled-components';

export const Inputs = styled.input`
  border: 2px solid;
  border-radius: 4px;
  font-size: 1rem;
  margin: 0.25rem;
  min-width: 125px;
  padding: 0.5rem;
  border-color: gray;

  &:optional {
    border-color: grey;
  }

  &:required:valid {
    border-color: #56d70a;
  }

  &:required:invalid {
    border-color: #cb062b;
  }
`;

