import styled from 'styled-components';
import { ReactComponent as RemoveIcon } from 'images/commonSvgImg/Icon_close.svg';

export const ShoppingItemContainer = styled.div`
  height: 84px;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 140px;
  margin: 0 16px;
  background-color: ${({ theme }) => theme.colors.primaryLightText};
  margin-bottom: 24px;
  border-bottom: 1px solid #e0e0e0;
  gap: 24px;

  @media ${({ theme }) => theme.devices.tablet} {
    height: 140px;
    margin: 0 32px;
    gap: 44px;
  }
  @media ${({ theme }) => theme.devices.desktop} {
    margin: 0 140px;
  }

  li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }
`;

export const ProductFotoWrapper = styled.div`
  background: #ebf3d4;
  width: 60px;
  height: 60px;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 24px;

  @media ${({ theme }) => theme.devices.tablet} {
    width: 93px;
    height: 97px;
    border-radius: 8px;
    margin-bottom: 42px;
  }
  @media ${({ theme }) => theme.devices.desktop} {
  }
`;

export const ProductFoto = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;

  @media ${({ theme }) => theme.devices.tablet} {
    width: 81px;
    height: 81px;
  }

  @media ${({ theme }) => theme.devices.desktop} {
  }
`;

export const ProductName = styled.p`
  font-size: 10px;
  line-height: 12px;
  font-weight: 500;
  color: #3e4462;
  margin-bottom: 16px;
  margin-left: 10px;
  margin-right: auto;

  @media ${({ theme }) => theme.devices.tablet} {
    font-size: 16px;
    line-height: 24px;
  }
  @media ${({ theme }) => theme.devices.desktop} {
  }
`;

export const ProductNumber = styled.p`
  font-size: ${({ theme }) => theme.fontSizes[1]}px;
  line-height: 15px;
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  color: ${({ theme }) => theme.colors.primaryLightText};
  width: 37px;
  height: 23px;
  margin-right: 49px;
  text-align: center;
  background: ${({ theme }) => theme.colors.greenAccent};
  border-radius: ${({ theme }) => theme.radii.m};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 61px;

  @media ${({ theme }) => theme.devices.tablet} {
    width: 68px;
    height: 35px;
    margin-right: 114px;
    font-size: 18px;
    line-height: 27px;
    margin-bottom: 105px;
  }
  @media ${({ theme }) => theme.devices.desktop} {
    margin-right: 178px;
    margin-bottom: 105px;
  }` 


export const RemoveIconWrapper = styled(RemoveIcon)`
  width: 7.88px; /* mobile size */

  @media screen and (min-width: ${({ theme }) => theme.devices.tablet}) {
    width: 11px; /* tablet size */
  }
`;
export const RemoveItemButton = styled.button`
  width: 7.88px; /* mobile size */

  border: none;
  cursor: pointer;
  background: transparent;
  margin-right: 38px;
  margin-bottom: 73px;
  @media screen and (min-width: ${({ theme }) => theme.devices.tablet}) {
    margin-right: 81px;
    margin-bottom: 124px;
  }
  @media screen and (min-width: ${({ theme }) => theme.devices.desktop}) {
    margin-right: 172px;
    margin-bottom: 124px;
  }
`;