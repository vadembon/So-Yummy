import React, { useState } from 'react';

import { Form, Input, Btn } from './Footer.styled';

export const SubscribeForm = () => {
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
    <Form onSubmit={handleSubmit}>
      {/* <label htmlFor="email"></label> */}
      <Input
        type="email"
        id="email"
        placeholder="Enter your email address"
        value={email}
        onChange={handleChange}
        required
      />
      {/* <span style={{ position: 'absolute', left: '10px' }}>
        <img src={emailIcon} alt="email icon" />
      </span> */}
      <Btn type="submit" disabled={!isValid}>
        Submit
      </Btn>
      {isSubmitted && <p>Thank you for subscribing to our newsletter!</p>}
      {!isValid && isSubmitted && <p>Please enter a valid email address.</p>}
    </Form>
  );
};
