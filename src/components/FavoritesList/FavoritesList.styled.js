import styled from 'styled-components';

export const FavoritesContainer = styled.div`
  padding: 50px 0px 100px;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 343px;
  height: auto;
  margin: 0 auto;
  @media screen and (min-width: 768px) {
    padding: 72px 0px 200px;
    width: 704px;
  }

  @media screen and (min-width: 1440px) {
    padding: 100px 0px 100px;
    width: 1240px;
  }
`;

export const FavoritTitle = styled.h3`
  font-weight: 600;
  font-size: 28px;
  line-height: 28px;
  letter-spacing: -0.02em;
  color: ${p => p.theme.colors.tertiaryDarkText};

  margin: 50px auto 50px 0px;

  @media screen and (min-width: 768px) {
    font-size: 32px;
    line-height: 32px;

    margin: 72px auto 100px 0px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 44px;
    line-height: 44px;

    margin: 100px auto 100px 0px;
  }
`;

export const FavoritesListContent = styled.ul`
  display: flex;
  flex-direction: column;
  width: 343px;
  gap: 18px;

  @media screen and (min-width: 768px) {
    width: 704px;
    gap: 40px;
  }

  @media screen and (min-width: 1440px) {
    width: 1240px;
    gap: 50px;
  }
`;

export const FavoritesItemContent = styled.div`
  min-width: 343px;
  border-radius: 8px;
  background-color: ${p => p.theme.colors.whiteText};

  @media screen and (min-width: 768px) {
    width: 704px;
    padding: 28px 24px;
  }

  @media screen and (min-width: 1440px) {
    width: 1240px;
    padding: 40px;
  }
`;
