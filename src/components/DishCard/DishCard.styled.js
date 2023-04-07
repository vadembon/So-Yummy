import styled from 'styled-components';

export const TooltipWrapper = styled.div`
  display: none;
`;

export const CardTitle = styled.div`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.25;
  letter-spacing: -0.24px;
  color: #3E4462;
  padding: 16px;
  background-color: #FFFFFF;
  position: absolute;
  top: 245px;
  left: 18px;
  
  border-radius: 8px;
  width: calc(100% - 68px);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  :hover + ${TooltipWrapper} {
    width: calc(100% - 36px);
    position: absolute;
    display: flex;
    justify-content: center;
    text-align: center;
    max-width: 100%;
    margin-top: -25px;
    border-radius: 5px;
    padding: 4px;
    font-family: 'Poppins';
    color: #22252A;
    background-color: #8baa36;
    p {
      width: 100%;
      padding: 5px;
    }
    @media (min-width: 1440px) {
      // margin-top: 8px;
    }
  }
`;

export const CardImg = styled.img`
  height: 323px;
  width: 343px;
  object-fit: cover;
  border-radius: 8px;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  @media (min-width: 768px) {
    // width: calc((100% - 32px) / 2);
    width: 336px;}

    @media (min-width: 1440px) {
      // width: calc((100% - 42px) / 4);
      width: 300px;
    }

`;

export const CardDish = styled.div`
  width: 343px;
  height: 323px;
  border-radius: 8px;
  position: relative;
  @media (min-width: 768px) {
    // width: calc((100% - 32px) / 2);
    width: 336px;
  }
  @media (min-width: 1440px) {
    // width: calc((100% - 42px) / 4);
    width: 300px;
  }
  a {
    display: block;
    overflow: hidden;
    border-radius: 8px;
    :hover img {
      transform: scale(1.1);
    }
  }
`;