import { useEffect } from 'react';

import {
  CloseBtnWrapper,
  ModalOverlay,
  ModalWindow,
} from './UserEditInfoModal.styled';

import { CloseButton } from 'components/CloseButton/CloseButton';
import { UserInfoModal } from 'components/Header/UserInfoModal/UserInfoModal';
import { LogoutModal } from "components/Header/LogoutModal/LogoutModal";

const modalRoot = document.querySelector('#modal-root');

export const UserEditInfoModal = ({ status, closeModal, name, avatarUrl }) => {
  useEffect(() => {
    const onEscPress = event => {
      if (event.code === 'Escape') {
        closeModal();
      }
    };

    window.addEventListener('keydown', onEscPress);

    return () => {
      window.removeEventListener('keydown', onEscPress);
    };
  }, [closeModal]);

  const onBackdropClick = event => {
    if (event.currentTarget === event.target) {
      closeModal();
    }
  };

  return (
    <ModalOverlay onClick={onBackdropClick}>
      <ModalWindow status={status}>
        <CloseBtnWrapper>
          <CloseButton location="modal" onClick={closeModal} />
        </CloseBtnWrapper>

        {status === 'edit' && (
          <UserInfoModal
            name={name}
            avatarUrl={avatarUrl}
            closeModal={closeModal}
          />
        )}
        {status === 'logout' && (
          <LogoutModal closeModal={closeModal} />
        )}
      </ModalWindow>
    </ModalOverlay>,
    modalRoot
  );
};
