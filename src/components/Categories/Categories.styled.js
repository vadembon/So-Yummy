import styled from 'styled-components';
import img from 'images/spinach.png';

export const SectionTitle = styled.h3`
position: absolute; 
font-style: normal;
font-weight: 600;
font-size: 28px;
line-height: 1;
letter-spacing: -0.02em;
font-feature-settings: 'liga' off;
color: #001833;
top: 114px;
z-index: 10;

@media screen and (min-width: 768px) {
    font-size: 32px;
    line-height: 1;
    top: 136px;
 };
    
@media screen and (min-width: 1440px) {
    font-size: 44px;
    line-height: 1;
    top: 164px;  
};
`
export const Spinach = styled.div`
margin: 0 auto;
  position: absolute;
  z-index: -1;
  background-image: url(${img});
  background-size: contain;
  pointer-events: none;
  background-repeat: no-repeat;
  width: 256px;
  height: 392px;
  left: 0px;
  top: 3090px;

  @media screen and (min-width: 768px) {
    width: 423px;
    height: 646px;
    left: 0px;
    top: 1660px;
  };
  @media screen and (min-width: 1440px) {
    width: 558px;
    height: 852px;
    left: 0px;
    top: 1000px;
  };
`;