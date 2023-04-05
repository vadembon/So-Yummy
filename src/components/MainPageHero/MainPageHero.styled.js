import styled from 'styled-components';
import { theme } from '../../constants/theme';

export const HeroSection = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 68px 16px 83px;

  margin: 0px auto 64px;

  @media screen and (min-width: 768px) {
    align-items: start;
    max-width: 768px;
    padding: 140px 32px 195px;

    margin: 0px auto 72px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1440px;
    padding: 162px 100px 267px;
  }
`;

export const HeroTitle = styled.h1`
  min-width: 303px;

  font-weight: 400;
  font-size: 60px;
  line-height: 60px;

  text-align: center;
  letter-spacing: -0.005em;

  color: ${theme.colors.greenAccent};

  margin-bottom: 14px;

  & span {
    color: ${theme.colors.secondaryDarkBackground};
  }

  @media screen and (min-width: 768px) {
    width: 364px;
    height: 72px;

    font-size: 72px;
    line-height: 72px;
    text-align: left;
    margin-bottom: 22px;
  }

  @media screen and (min-width: 1440px) {
    width: 505px;
    height: 100px;
    font-size: 100px;
    line-height: 100px;

    margin-bottom: 14px;
  }
`;

export const HeroText = styled.p`
  width: 230px;
  height: 72px;

  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  /* or 129% */

  text-align: center;
  letter-spacing: -0.02em;

  color: ${theme.colors.primaryDarkText};

  @media screen and (min-width: 768px) {
    width: 320px;
    height: 54px;

    font-size: 14px;
    line-height: 18px;

    text-align: left;
    margin-bottom: 32px;
  }

  @media screen and (min-width: 1440px) {
    width: 410px;
    height: 72px;

    font-size: 18px;
    line-height: 24px;
    margin-bottom: 49px;
  }
`;
