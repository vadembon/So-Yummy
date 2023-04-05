import { useState } from 'react';
import { useRegister } from '../../api/hooks';
import { Inputs } from './RegisterForm.styled';


export const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { mutate, error, isLoading } = useRegister();

  const handleSubmit = (event) => {
    event.preventDefault();
    mutate({ name, email, password });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <Inputs
          required
          type="text"
          id="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <Inputs
          required
          type="email"
          id="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <Inputs
          required
          type="password"
          id="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>
      <button type="submit" disabled={isLoading}>
        {isLoading ? 'Loading...' : 'Register'}
      </button>
      {error && <p>{error.message}</p>}
    </form>
  );
};