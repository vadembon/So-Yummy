import { useState } from 'react';
import { useUpdateUser } from 'api/hooks/useUpdateUser';
import { useUser } from 'api/hooks/useUser';
import { FiUser } from 'react-icons/fi';

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

export const UserEditForm= () => {
  const { data } = useUser();
  const [name, setName] = useState('');
  const [avatar, setAvatar] = useState('');

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
          <img src={data.avatar} alt={avatar} />
          </UserWrapper>
        <input 
        type='file'
        id='avatar'
        name='avatar'
        accept="image/png, image/jpeg"
        onChange={(e) => setAvatar(e.target.value)} />
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
      </NameLabel>
      <Button type="submit" disabled={isLoading}>
      Save changes
      </Button>
      </InputsWrapper>
      {error}
    </Form>
  );
};