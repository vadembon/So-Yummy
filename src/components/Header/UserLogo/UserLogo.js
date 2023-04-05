import { useEffect, useState } from 'react';
import { useUser } from 'api/hooks/useUser';

import { UserEditInfoModal } from '../UserEditInfoModal/UserEditInfoModal';
import { UserLogoModal } from '../UserLogoModal/UserLogoModal';

import icon_user from "images/commonSvgImg/icon_user.svg";

import {
  Wrapper,
  Button,
} from './UserLogo.styled';

export const UserLogo = ({
  name = 'User',
  avatarUrl = icon_user,
}) => {
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showUserModal, setShowUserModal] = useState(false);
  const [statusModal, setStatusModal] = useState('');

  const toggleUserEditMenu = e => {
    setShowUserMenu(!showUserMenu);
  };

  const toggleUserModal = status => {
    setShowUserModal(!showUserModal);
    setStatusModal(status);
    setShowUserMenu(false);
  };

  const handleBlur = () => {
    setTimeout(() => {
      setShowUserMenu(false);
    }, 300);
  };

  useEffect(() => {
    const pressEsc = event => {
      if (event.code === 'Escape') {
        setShowUserMenu(false);
      }
    };

    window.addEventListener('keydown', pressEsc);

    return () => {
      window.removeEventListener('keydown', pressEsc);
    };
  }, []);

  return (
    <>
      <Wrapper>
        <Button
          type="button"
          onClick={toggleUserEditMenu}
          onBlur={handleBlur}
        >
          <img src={avatarUrl} alt={name} />
          <p>{name}</p>
        </Button>

        {showUserMenu && (
          <UserLogoModal
            setShowUserMenu={() => setShowUserMenu}
            toggleModal={toggleUserModal}
          />
        )}
      </Wrapper>

      {showUserModal && (
        <UserEditInfoModal
          name={name}
          avatarUrl={avatarUrl}
          closeModal={toggleUserModal}
          status={statusModal}
        />
      )}
    </>
  );
};