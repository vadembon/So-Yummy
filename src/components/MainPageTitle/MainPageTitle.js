import { Title, TitleBox, Dot } from './MainPageTitle.styled';
export const MainPageTitle = ({ title }) => {
  return (
    <TitleBox>
      <Title>{title}</Title>
      <Dot dotNumber={0} />
      <Dot dotNumber={1} />
      <Dot dotNumber={2} />
    </TitleBox>
  );
};
