import styled from 'styled-components';

export const HeroSection = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;

  align-items: center;

  padding-top: 68px;
  padding-bottom: 83px;

  margin-bottom: 500px;

  @media (min-width: 768px) {
  }

  @media (min-width: 1280px) {
  }
`;

export const HeroTitle = styled.h1`
  font-style: normal;
  font-weight: 400;
  font-size: 60px;
  line-height: 60px;

  text-align: center;
  letter-spacing: -0.005em;

  color: #8baa36;

  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin-bottom: 14px;

  & span {
    color: #22252a;
  }

  @media (min-width: 768px) {
  }

  @media (min-width: 1280px) {
  }
`;

export const HeroText = styled.p`
  width: 248px;
  height: 72px;

  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  /* or 129% */

  text-align: center;
  letter-spacing: -0.02em;

  color: #23262a;

  @media (min-width: 768px) {
  }

  @media (min-width: 1280px) {
  }
`;
