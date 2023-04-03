import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { ContainerDots } from 'commonComponents/BackgroundDots/BackgroundDots.styled';

export const Footer = () => {
  return (
    <ContainerDots>
      <footer>
        <Navigation />
        <FollowUs />
        <SubscribeForm />
      </footer>
    </ContainerDots>
  );
};

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/search">Ingredients</Link>
        </li>
        <li>
          <Link to="/add">Add Recipe</Link>
        </li>
        <li>
          <Link to="/my">My Recipes</Link>
        </li>
        <li>
          <Link to="/favorite">Favorite Recipes</Link>
        </li>
        <li>
          <Link to="/shopping-list">Shopping List</Link>
        </li>
      </ul>
    </nav>
  );
};

const SubscribeForm = () => {
  const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    setIsSubmitted(true);
    setEmail('');
  };

  const handleChange = e => {
    const input = e.target.value;
    setEmail(input);
    setIsValid(/^\S+@\S+\.\S+$/.test(input));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Subscribe to our newsletter:</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={handleChange}
        required
      />
      <button type="submit" disabled={!isValid}>
        Submit
      </button>
      {isSubmitted && <p>Thank you for subscribing to our newsletter!</p>}
      {!isValid && isSubmitted && <p>Please enter a valid email address.</p>}
    </form>
  );
};

const FollowUs = () => {
  return (
    <ul>
      <li>
        <a href="https://www.facebook.com/">Facebook</a>
      </li>
      <li>
        <a href="https://www.twitter.com/">Twitter</a>
      </li>
      <li>
        <a href="https://www.instagram.com/">Instagram</a>
      </li>
    </ul>
  );
};
