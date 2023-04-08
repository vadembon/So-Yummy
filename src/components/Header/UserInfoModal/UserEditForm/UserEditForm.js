import { useState } from 'react';
import { useUpdateUser } from 'api/hooks/useUpdateUser';

import {
    Avatar,
    Input,
    Button,
    Wrapper,
    Form
  } from './UserEditForm.styled';

export const UserEditForm= () => {
  const [name, setName] = useState('');
  const [avatar, setAvatar] = useState('');

  const { mutate, error, isLoading } = useUpdateUser();
  

  const handleSubmit = (e) => {
    e.preventDefault();
    mutate({ name, avatar});
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Wrapper>
        <label htmlFor="avatar">
        <Avatar src={avatar} alt="avatar" onChange={(e) => setAvatar(e.target.value)} />
        </label>
          
      </Wrapper>
      <div>
        <label htmlFor="name"></label>
        <Input
          required
          type="name"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <Button type="submit" disabled={isLoading}>
      </Button>
      {error}
    </Form>
  );
};