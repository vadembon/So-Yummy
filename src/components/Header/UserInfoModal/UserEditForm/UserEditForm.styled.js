import styled from 'styled-components';

export const Avatar = styled.svg`
  position: absolute;
  width: 18px;
  height: 18px;
  top: 50%;
  left: 16.5px;
  transform: translateY(-50%);
`;

export const Input = styled.input`
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

export const Button = styled.button`
  width: 100%;
  padding: 14px;
  background-color: ${p => p.theme.colors.greenAccent};
  border-radius: ${p => p.theme.radii.l};
  font-family: ${p => p.theme.fonts.primary};
  font-size: 14px;
  white-space: nowrap;
  cursor: pointer;
  transition: ${p => p.theme.transitions.main};
  &:disabled {
    opacity: 0.7;
    pointer-events: none;
  }
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;