import styled from 'styled-components';

export const ListBox = styled.ul`
  display: flex;
  flex-wrap: wrap;
  /* min-width: 80%; */
  flex-grow: 1;
`;

export const RecipeItem = styled.li`
  display: flex;
  /* max-width: 100%; */
  color: black;
  gap: 13px;
  margin-bottom: 13px;
  padding-top: 24px;

  @media (min-width: ${({ theme: { devices } }) => devices.tablet}) {
    /* max-width: 50%; */
  }
  @media (min-width: ${({ theme: { devices } }) => devices.desktop}) {
    /* max-width: 30%; */
  }
`;

export const ImageBox = styled.img`
  display: block;
  width: 100px;
  height: 85px;
  border-radius: 8px;
  object-fit: cover;
  alt: 'food';
`;

export const TextBox = styled.div`
  flex-grow: 1;
`;

export const TitleBox = styled.p`
  font-size: 16px;
  font-weight: ${({ theme: { fontWeights } }) => fontWeights.medium};
  color: ${({ theme: { colors } }) => colors.secondaryDarkText};
`;

export const AboutBox = styled.p`
  font-size: 12px;
  font-weight: ${({ theme: { fontWeights } }) => fontWeights.regular};
  color: #7e7e7e;
`;
