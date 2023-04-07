import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderStyled = styled.header`
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100px;
  top: 0;
  left: 50%;
  z-index: 10;
  transform: translateX(-50%);
  padding-top: 18px;
  @media screen and (min-width: 1440px) {
    padding-top: 14px;
  }
`;

export const HeaderWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderWrapperLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HeaderLogo = styled(NavLink)`
  & img {
    width: 40px;
    height: 40px;
    @media screen and (min-width: 768px) {
      width: 44px;
      height: 44px;
    }
  }
`;

export const BurgerWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const BurgerButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  padding: 0;
  cursor: pointer;
  & img {
    width: 28px;
    height: 28px;

    @media screen and (min-width: 768px) {
      width: 32px;
      height: 32px;
    }
  }
`;

export const MobileMenuWrapper = styled.div`
  position: fixed;
  box-sizing: border-box;
  z-index: 200;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  padding: 18px;
  display: flex;
  transform: ${p =>
    p.isShown ? 'translate3d(0, 0vh, 0)' : 'translate3d(0, -100vh, 0)'};
  transition: transform 1s cubic-bezier(0, 0.52, 0, 1);
  flex-direction: column;
  justify-content: space-between;
  align-items: space-between;

 
  /* background-position: bottom right;
  background-repeat: no-repeat;
  background-size: contain; */
  /* @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) { */

  /* } */
  @media screen and (min-width: 768px) {
    padding: 18px 32px;

    /* @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {

    } */
  }
`;

export const MobileMenuHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

// export const MobileMenuThemeTogglerWrapper = styled.div`
//   display: flex;
// `;
