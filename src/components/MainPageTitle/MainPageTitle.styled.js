import styled from 'styled-components';

const dotY = [{ top: '10px' }, { top: '44px' }, { top: '80px' }];
const dotX = [{ left: '104px' }, { right: '-2px' }, { right: '120px' }];
const dotColor = [
  { background: '#8BAA36' },
  { background: '#8BAA36' },
  { background: '#22252A' },
];
const dotW = [{ width: '8px' }, { width: '8px' }, { width: '6px' }];
const dotH = [{ height: '8px' }, { height: '8px' }, { height: '6px' }];

//tablet
const dotYt = [{ top: '21px' }, { top: '34px' }, { top: '91px' }];
const dotXt = [{ left: '187px' }, { right: '-8px' }, { right: '284px' }];

const dotWt = [{ width: '14px' }, { width: '14px' }, { width: '12px' }];
const dotHt = [{ height: '14px' }, { height: '14px' }, { height: '12px' }];

export const Dot = styled.div`
  position: absolute;
  transform: rotate(-25deg);
  border-radius: 3px;

  ${({ dotNumber }) => dotX[dotNumber]}
  ${({ dotNumber }) => dotY[dotNumber]}
  ${({ dotNumber }) => dotW[dotNumber]}
  ${({ dotNumber }) => dotH[dotNumber]}
  ${({ dotNumber }) => dotColor[dotNumber]}

  @media (min-width: ${({ theme: { devices } }) => devices.tablet}) {
    ${({ dotNumber }) => dotXt[dotNumber]}
    ${({ dotNumber }) => dotYt[dotNumber]}
  ${({ dotNumber }) => dotWt[dotNumber]}
  ${({ dotNumber }) => dotHt[dotNumber]}
  }
`;

export const Title = styled.h2`
  /* align-self: flex-start; */
  font-family: ${props => props.theme.fonts.primary};
  font-size: ${props => props.theme.fontSizes[10]}px;

  // font-weight: ${({ theme: { fontWeights } }) => fontWeights.semibold};
  /* text-align: center; */
  // color: ${({ theme: { colors } }) => colors.tertiaryDarkText};
`;

export const TitleBox = styled.div`
  position: relative;
  height: 150px;
  padding: 100px 16px 0px;
  /* display: flex; */
  /* align-items: center; */
  /* color: ${({ theme: { colors } }) => colors.primaryLightText}; */
  /* background: ${({ theme: { colors } }) => colors.backgroundLight}; */

  @media (min-width: ${({ theme: { devices } }) => devices.tablet}) {
    height: 176px;
    padding: 100px 32px 0px;
  }

  @media (min-width: ${({ theme: { devices } }) => devices.desktop}) {
    height: 200px;
  }
`;
