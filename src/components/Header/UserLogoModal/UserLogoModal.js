import { EditBtn, LogOutBtn, UserMenu } from './UserLogoModal.styled';

import sicon_edit from 'images/commonSvgImg/icon-edit.svg';
import icon_arrow_right from 'images/commonSvgImg/icon-arrow-right.svg';

export const UserLogoModal = ({ toggleModal }) => {
  return (
    <>
      <UserMenu>
        <EditBtn type="button" onClick={() => toggleModal('edit')}>
          <span>Edit profile</span>
          <img src={sicon_edit} alt="edit" />
        </EditBtn>
        <LogOutBtn type="button" onClick={() => toggleModal('logout')}>
          <span>Log Out</span>
          <img src={icon_arrow_right} alt="arrow" />
        </LogOutBtn>
      </UserMenu>
    </>
  );
};