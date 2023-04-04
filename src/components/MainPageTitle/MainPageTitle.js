import { ContainerDots } from './MainPageTitle.styled';
import { Title } from './MainPageTitle.styled';
export const MainPageTitle = ({ title }) => {
  return (
    <ContainerDots>
      <Title>{title}</Title>
    </ContainerDots>
  );
};
