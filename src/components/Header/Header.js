import { useState } from 'react';

import { useUser } from 'api/hooks/useUser';

import {
  HeaderStyled,
  HeaderWrapper,
  HeaderWrapperLogo,
  HeaderLogo,
  UserWrapper,
  BurgerButton,
  MobileMenuWrapper,
  MobileMenuHeaderContainer,
  MobileMenuThemeTogglerWrapper,
} from './Header.styled';

import logo_desk from "images/commonSvgImg/logo_desk.svg";
import iconburger_menu from "images/commonSvgImg/Iconburger-menu.svg";

import { HeaderNavigation } from "components/Header/HeaderNav/HeaderNav";
import { UserLogo } from "components/Header/UserLogo/UserLogo";
import { Container } from 'components/Container/Container';
import { ThemeToggler } from 'components/ThemeToggler/ThemeToggler';
import { CloseButton } from 'components/CloseButton/CloseButton';

export const Header = () => {

  const [showBurgerMenu, setShowBurgerMenu] = useState(false);
  const menuIsOpen = useUser();


//   const userName = useSelector(getName);
//   const userAvatar = useSelector(getAvatar);

  const toggleMenu = event => {
    setShowBurgerMenu(!showBurgerMenu);
  };

   return (
     <>
       {menuIsOpen ? (
         <HeaderStyled>
           <Container>
             <HeaderWrapper>
               <HeaderWrapperLogo>
                 <HeaderLogo to="/main">
                   <img src={logo_desk} alt="logo" />
                 </HeaderLogo>
                
               </HeaderWrapperLogo>
               <HeaderNavigation />
               <UserLogo
               //  name={name}
               //  avatarUrl={avatar}
               />
               <ThemeToggler />
             </HeaderWrapper>
           </Container>
         </HeaderStyled>
       ) : (
         <>
           <HeaderStyled>
             <Container>
               <HeaderWrapper>
                 <HeaderWrapperLogo>
                   <HeaderLogo to="/main">
                     <img src={logo_desk} alt="logo" />
                   </HeaderLogo>
                 </HeaderWrapperLogo>
                 <UserWrapper>
                   <UserLogo
                   // name={userName}
                   // avatarUrl={userAvatar}
                   />
                   <BurgerButton
                     type="button"
                     onClick={toggleMenu}
                   >
                       <img src={iconburger_menu} alt="burger" />
                   </BurgerButton>
                 </UserWrapper>
               </HeaderWrapper>
             </Container>
           </HeaderStyled>
           <MobileMenuWrapper isShown={showBurgerMenu}>
             <MobileMenuHeaderContainer>
               <HeaderWrapperLogo>
                 <HeaderLogo
                   to="/main"
                   onClick={() => {
                     setShowBurgerMenu(false);
                   }}
                 >
                   <img src={logo_desk} alt="logo" />
                 </HeaderLogo>
               </HeaderWrapperLogo>
               <CloseButton onClick={toggleMenu} />
             </MobileMenuHeaderContainer>
             <HeaderNavigation
               setShowBurgerMenu={setShowBurgerMenu}
             />
             <MobileMenuThemeTogglerWrapper>
               <ThemeToggler />
             </MobileMenuThemeTogglerWrapper>
           </MobileMenuWrapper>
         </>
       )}
     </>
 );
};