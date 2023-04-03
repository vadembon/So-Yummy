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
