import styled from 'styled-components';

export const SearchFormSection = styled.form`
  position: relative;
  width: 295px;
  height: 52px;

  @media screen and (min-width: 768px) {
    width: 369px;
    height: 59px;
  }

  @media screen and (min-width: 1440px) {
    width: 510px;
    height: 71px;
  }
`;

export const SearchInput = styled.input`
  padding: 0px 32px;
  font-size: 12px;
  line-height: 18px;
  color: #bdbdbd;
  width: 295px;
  height: 52px;
  border: 1px solid #f0f0f0;
  border-radius: 60px 120px 60px 120px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 24px;
    width: 369px;
    height: 59px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 16px;
    line-height: 24px;
    width: 510px;
    height: 70px;
  }
`;

export const SearchButton = styled.button`
  position: absolute;
  right: 0px;
  width: 113px;
  height: 52px;
  font-size: 14px;
  line-height: 21px;
  cursor: pointer;
  color: #fafafa;
  background: ${props => props.color};
  border: 1px solid transparent;
  border-radius: 60px 120px 60px 120px;

  &:hover {
    background-color: ${props =>
      props.color === '#8baa36' ? '#22252a' : '#8baa36'};
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 24px;
    width: 161px;
    height: 59px;
  }

  @media screen and (min-width: 1440px) {
    width: 161px;
    height: 70px;
  }
`;
// Alex background: #22252a;

//  hover:  background: #8baa36;
