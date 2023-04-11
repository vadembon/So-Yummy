import { useState } from 'react';
import { useUpdateUser } from 'api/hooks/useUpdateUser';
import { useUser } from 'api/hooks/useUser';
import { FiUser } from 'react-icons/fi';
import { FiEdit2 } from 'react-icons/fi';

import {
  AvatarWrapper,
  Form,
  UserWrapper,
  NameLabel,
  UserIcon,
  NameInput,
  Button,
  InputsWrapper,
  } from './UserEditForm.styled';

export const UserEditForm= ({closeModal}) => {
  const { data } = useUser();
  const [name, setName] = useState(data.name);
  const [avatar, setAvatar] = useState(data.avatar);

  const { mutate, error, isLoading } = useUpdateUser();

  const handleSubmit = (e) => {
    e.preventDefault();
    mutate({ name, avatar});
  };

  return (
    <Form onSubmit={handleSubmit}>
      <AvatarWrapper>
        <label htmlFor="avatar" id="labelFile">
          <UserWrapper>
          <img src={avatar} alt={avatar} />
          </UserWrapper>
        <input 
        type='file'
        id='avatar'
        name='avatar'
        accept="image/png, image/jpeg"
        onChange={(e) => setAvatar(e.target.files[0])} />
        </label>
      </AvatarWrapper>
      <InputsWrapper>
      <NameLabel htmlFor="name" id="labelName">
      <UserIcon><FiUser /></UserIcon>
        <NameInput
          type="name"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <UserIcon><FiEdit2 /></UserIcon>
      </NameLabel>
      
      <Button type="submit" disabled={isLoading}>
      Save changes
      </Button>
      </InputsWrapper>
      {error}
    </Form>
  );
};