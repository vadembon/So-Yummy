import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  align-items: center;
  display: flex;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10000;
`;

export const ModalWindow = styled.div`
  position: relative;
  height: fit-content;
  width: 330px;
  padding: ${p => (p.status === 'logout' ? '44px 24px' : '32px 24px')};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: space-between;
  border-radius: ${p => p.theme.radii.userProfile};
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

export const Wrapper = styled.div`
  position: absolute;
  top: 29px;
  right: 29px;
`;