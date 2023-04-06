import styled from 'styled-components';
import { usePopular } from 'api/hooks';
import { Loader } from 'components/Loader';
import { useNavigate } from 'react-router-dom';

export const PopularRecipe = () => {
  const { data, isLoading } = usePopular();

  return (
    <ListBox>
      {isLoading ? (
        <Loader />
      ) : (
        data.slice(0, 4).map(item => <Item key={item._id} {...item} />)
      )}
    </ListBox>
  );
};

const ListBox = styled.ul`
  display: flex;
  flex-wrap: wrap;
  min-width: 80%;
`;

const Item = ({ key, preview, title, description, _id }) => {
  console.log(key);
  console.log(_id);
  const navigate = useNavigate();
  const handlerOnClick = () => {
    navigate(`/recipe/:${_id}`);
  };

  return (
    <RecipeItem onClick={handlerOnClick}>
      <ImageBox src={preview} alt={title} width={90} />
      <TextBox>
        <TitleBox>{title}</TitleBox>
        <AboutBox>{description}</AboutBox>
      </TextBox>
    </RecipeItem>
  );
};

const RecipeItem = styled.li`
  display: flex;
  max-width: 100%;
  color: black;
  gap: 13px;
  margin-bottom: 13px;
  padding-top: 24px;

  @media (min-width: ${({ theme: { devices } }) => devices.tablet}) {
    max-width: 50%;
  }
  @media (min-width: ${({ theme: { devices } }) => devices.desktop}) {
    max-width: 30%;
  }
`;

const ImageBox = styled.img`
  display: block;
  width: 100px;
  height: 85px;
  border-radius: 8px;
  object-fit: cover;
  alt: 'food';
`;

const TextBox = styled.div`
  flex-grow: 1;
`;

const TitleBox = styled.p`
  font-size: 16px;
  font-weight: ${({ theme: { fontWeights } }) => fontWeights.medium};
  color: ${({ theme: { colors } }) => colors.secondaryDarkText};
`;

const AboutBox = styled.p`
  font-size: 12px;
  font-weight: ${({ theme: { fontWeights } }) => fontWeights.regular};
  color: #7e7e7e;
`;
