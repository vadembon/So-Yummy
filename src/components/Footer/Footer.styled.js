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
  color: ${theme.colors.whiteText};
  padding-top: 50px;
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
  color: #fafafa;
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
  color: #fafafa;
  &:hover,
  :focus {
    color: ${theme.colors.greenAccent};
  }
`;

export const Nav = styled.nav`
  margin-bottom: 32px;
  text-align: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Input = styled.input`
  width: 204px;
  height: 38px;
  border: 1px solid #fafafa;
  border-radius: 6px;
  outline: rgba(0, 0, 0, 0.2);
  background-color: transparent;
  justify-content: center;

  &::placeholder {
    font-size: 10px;
    line-height: 15px;
    background-image: url();
    /* background-position: left center; */
    background-repeat: no-repeat;
    padding-left: 30px;

    letter-spacing: -0.02em;
    color: #fafafa;
    text-align: center;
  }
`;

export const Btn = styled.button`
  width: 204px;
  height: 38px;
  border: none;
  border-radius: 6px;
  outline: rgba(0, 0, 0, 0.2);
  background-color: ${theme.colors.greenAccent};
`;

export const All = styled.div`
  background-color: #ececec;
  padding-bottom: 32px;
`;
