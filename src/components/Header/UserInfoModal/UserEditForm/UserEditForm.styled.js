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

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-bottom: 56px;
  @media screen and (min-width: 768px) {
    margin-bottom: 49px;
  }
  @media screen and (min-width: 768px) {
    margin-bottom: 52px;
  }
`;

export const InputsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  position: relative;
  @media screen and (min-width: 768px) {
    gap: 33px;
  }
  @media screen and (min-width: 1440px) {
    gap: 32px;
  }
`;

export const Form = styled.form`
  input[type='file'] {
    width: 0;
    height: 0;
    opacity: 0;
    position: absolute;
    z-index: -1;
    display: block;
    padding: 0;
  }
  & img {
    width: 88px;
    height: 88px;
    border-radius: ${p => p.theme.radii.round};
    @media screen and (min-width: 768px) {
      width: 103px;
      height: 103px;
    }
  }
`;