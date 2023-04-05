import styled from 'styled-components';
import { theme } from 'constants';
import { NavLink } from 'react-router-dom';
// import emailIcon from '../../images/footer/email.svg';

export const FoterStyle = styled.footer`
  /* background-color: ${theme.colors.greenAccent}; */
  /* color: ${theme.colors.whiteText}; */
  font-family: ${theme.fonts.primary};
  /* padding-top: 50px; */
  /* padding-bottom: 32px; */
  /* text-align: center; */
`;
export const FoterBox = styled.div`
  background-color: ${theme.colors.darkAccent};
  color: ${theme.colors.primaryLightText};
  padding-top: 50px;
  padding-bottom: 18px;

  position: relative;
  z-index: 2;
`;

////////////////// Styled Title -- Logo//////////
export const TitleBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 32px;
`;

export const Logo = styled.img`
  margin-right: 8px;
  width: 32px;
  height: 32px;
`;

export const TitleText = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 18px;
  letter-spacing: 0.015em;
  color: ${theme.colors.primaryLightText};
`;

///////////////  Styled Navigation /////////
export const ItemNav = styled.li`
  &:not(:last-child) {
    margin-bottom: 14px;
  }
`;

export const Styledlink = styled(NavLink)`
  line-height: 18px;
  letter-spacing: -0.02em;
  color: ${theme.colors.primaryLightText};
  &:hover,
  :focus {
    color: ${theme.colors.greenAccent};
  }
`;

export const Nav = styled.nav`
  margin-bottom: 32px;
  text-align: center;
`;

///////////////  Styled SubscribeForm /////////

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Input = styled.input`
  width: 204px;
  height: 38px;
  border: 1px solid ${theme.colors.primaryLightText};
  border-radius: 6px;
  outline: rgba(0, 0, 0, 0.2);
  background-color: transparent;
  justify-content: center;
  color: ${theme.colors.primaryLightText};
  font-size: 10px;
  padding-left: 51px;
  margin-bottom: 8px;

  &::placeholder {
    font-size: 10px;
    line-height: 15px;
    /* background-image: url('../../images/footer/email.svg'); */
    /* background-position: left center; */
    /* background-repeat: no-repeat;
    padding-left: 30px; */
    /* padding-left: 51px; */
    letter-spacing: -0.02em;
    ${theme.colors.primaryLightText}
  }
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus {
    -webkit-box-shadow: 0 0 0 30px ${theme.colors.darkAccent} inset !important;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
    -webkit-text-fill-color: ${theme.colors.whiteText} !important;
    background-color: ${theme.colors.darkAccent} !important;
  }
`;

export const Btn = styled.button`
  width: 204px;
  height: 38px;
  border: none;
  border-radius: 6px;
  outline: rgba(0, 0, 0, 0.2);
  background-color: ${theme.colors.greenAccent};
  font-size: 14px;
  margin-bottom: 44px;

  &:valid {
    color: ${theme.colors.primaryLightText};
  }

  &:hover:valid,
  :focus:valid {
    color: ${theme.colors.darkAccent};
  }
`;

///////////////  Styled FollowUs /////////
export const IconList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const IconItem = styled.li`
  &:not(:last-child) {
    margin-right: 16px;
  }
`;

export const IconImg = styled.img`
  width: 18px;
  &:hover,
  :focus {
    opacity: 0.8;
    transform: scale(1.2);
  }
`;

///////////////  Styled Rights /////////
export const RightsBox = styled.div`
  background-color: ${theme.colors.lightBackground};
  padding-bottom: 32px;
`;

export const RightsText = styled.p`
  font-size: 10px;
  line-height: 10px;

  letter-spacing: -0.01em;

  color: #22252a;
  opacity: 0.5;
  text-align: center;

  padding-top: 32px;
`;
export const Span = styled.span`
  margin-left: 14px;
`;

export const ImgRights = styled.img`
  position: absolute;
  left: 167px;
  top: 376px;
  z-index: 1;
`;
