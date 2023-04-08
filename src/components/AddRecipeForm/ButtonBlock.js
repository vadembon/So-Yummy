import styled from 'styled-components';

export const ButtonBlock = ({ close, handleMinus, handlePlus, number }) => {
  return (
    <div style={{ display: 'flex' }}>
      <ControlButton onClick={handleMinus}>-</ControlButton>
      <ControlButton onClick={close}> {number} </ControlButton>
      <ControlButton onClick={handlePlus}>+</ControlButton>
    </div>
  );
};

const ControlButton = styled.div`
  width: 40px;
  height: 40px;
  font-size: 40px;
  border-radius: 50%;
  text-align: center;
  color: ${({ theme: { colors } }) => colors.greenAccent};
  background: ${({ theme: { colors } }) => colors.backgroundLight};
`;
