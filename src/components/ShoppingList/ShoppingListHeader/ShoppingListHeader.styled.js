import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  margin: 50px 8px 32px 8px;
  background-color: ${props => props.theme.colors.greenAccent};
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  font-size: 12px;
  line-height: 18px;
  border-radius: 8px;
  color: ${props => props.theme.colors.primaryLightText};

  @media ${props => props.theme.devices.tablet} {
    margin: 50px 8px 32px 8px;
  }

  @media ${props => props.theme.devices.desktop} {
    margin: 72px 32px 50px 32px;
  }
`;

export const ProductsHeader = styled.div`
  margin: 10px 0 10px 10px;

  @media ${props => props.theme.devices.tablet} {
    line-height: 27px;
    margin: 20px 0 20px 20px;
  }

  @media ${props => props.theme.devices.desktop} {
    line-height: 27px;
    margin: 21px 0 21px 40px;
  }
`;

export const NumberHeader = styled.div`
  margin: 10px 0px;

  @media ${props => props.theme.devices.tablet} {
    line-height: 26px;
    margin: 16px 0 16px 16px;
  }

  @media ${props => props.theme.devices.desktop} {
    gap: 142px;
    margin: 17px 0 17px 17px;
  }
`;

export const RemoveHeader = styled.div`
  margin: 10px 10px 10px 0px;

  @media ${props => props.theme.devices.tablet} {
    line-height: 27px;
    margin: 16px 16px 16px 0px;
  }

  @media ${props => props.theme.devices.desktop} {
    gap: 142px;
    margin: 17px 40px 16px 0px;
  }
`;

export const NumberProductWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: 10px 10px 10px 0px;
  margin-left: auto;
  gap: 24px;
  line-height: 28px;

  @media ${props => props.theme.devices.tablet} {
    gap: 78px;
  }

  @media ${props => props.theme.devices.desktop} {
    gap: 142px;
  }
`;
