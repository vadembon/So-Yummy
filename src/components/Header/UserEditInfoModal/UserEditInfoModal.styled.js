import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10000;
`;

export const ModalWindow = styled.div`
  position: relative;
  height: fit-content;
  width: 330px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: space-between;
  opacity: 1;
  z-index: 20000;
  overflow-y: hidden;
  overflow-x: hidden;

  @media screen and (min-width: 768px) {
    padding: 50px 40px;
    width: 480px;
  }

  @media screen and (min-width: 1440px) {
    width: 500px;
  }
`;

export const CloseBtnWrapper = styled.div`
  position: absolute;
  top: 29px;
  right: 29px;
`;
