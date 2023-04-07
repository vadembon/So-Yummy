import styled from "styled-components";
import { NavLink } from "react-router-dom";

// export const Navigation = styled.nav`
// display: flex; 
// align-items: center; 
// justify-content: center;
// flex-direction: column;
// gap: 32px;
//    @media screen and (min-width: 768px) {
//      gap: 40px;
//    }
//    @media screen and (min-width: 1440px) {
//     flex-direction: row;
//     gap: 30px;
//     justify-content: space-between;
//     margin-left: 180px;
//     margin-right: 220px;
//   }
// `;

export const LocationLink = styled(NavLink)`
  display: flex;
  gap: 8px;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  font-size: 18px;
  font-weight: ${p => p.theme.fontWeights.regular};
  transition: ${p => p.theme.transitions.main};
  :hover:not(.active),
  :focus-visible:not(.active) {
     color: ${p => p.theme.colors.greenAccent};
   }
   &:hover svg,
   &:focus svg {
    stroke: ${p => p.theme.colors.greenAccent};
   }
   @media screen and (min-width: 1440px) {
    font-size: 24px;
  }
  @media screen and (min-width: 1440px) {
    font-size: 14px;
  }
  & span {
    display: flex;
    @media screen and (min-width: 1440px) {
      display: none;
    }
  }
  & svg {
    width: 20px;
    height: 20px;
    @media screen and (min-width: 768px) {
      width: 24px;
      height: 24px;
    }
  }
`;



