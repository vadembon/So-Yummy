import styled from 'styled-components';

export const Button = styled.button`
  color: ${({ theme: { colors } }) => colors.primaryLightText};
  /* border: 2px solid ${({ theme: { colors } }) => colors.darkAccent}; */
  border: 2px solid transparent;
  background: ${({ theme: { colors } }) => colors.darkAccent};
  /* background: ${({ theme: { colors } }) => colors.greenAccent}; */

  width: 161px;
  height: 52px;
  /* font-size: ${props => props.theme.fontSizes[4]}; */

  /* margin: 1em; */
  /* border: none; */
  /* padding: 50px 42px; */

  ${({ largeButton }) =>
    largeButton &&
    `
     width: 300px;
     height: 52px;
  `}

  ${({ styledButton }) =>
    styledButton &&
    `
    height: 100px;
    clip-path: inset(25% 0 25% 0 round 15% 35% 15% 30%); 
  `}
`;
