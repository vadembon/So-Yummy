import { useState } from 'react';
import { useUpdateUser } from 'api/hooks/useUpdateUser';


export const UserInfoModal = () => {
  const [name, setName] = useState('');
  const [avatar, setAvatar] = useState('');

  const { mutate, error, isLoading } = useUpdateUser();
  

  const handleSubmit = (event) => {
    event.preventDefault();
    mutate({ name, avatar});
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="avatar">Name:</label>
        <input
          required
          type="img"
          id="avatar"
          onChange={(event) => setAvatar(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="name">Email:</label>
        <input
          required
          type="name"
          id="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </div>
      <button type="submit" disabled={isLoading}>
      </button>
      {error && <p>{error.message}</p>}
    </form>
  );
};