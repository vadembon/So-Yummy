import React, { useState } from 'react';
import { useSubscribe } from 'api/hooks/useSubscribe';

// import emailIcon from '../../images/footer/email.svg';
import {
  SubscribeContainer,
  SubscribeBox,
  SubscribeTitle,
  SubscribeText,
  Form,
  Input,
  Btn,
} from './Footer.styled';

// const useSubscribe = cb => {
//   const mutate = email => {
//     cb?.onSuccess?.(email);
//   };
//   return { mutate, error: null, isLoading: false };
// };

export const SubscribeForm = () => {
  const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState(false);
  // const [isSubmitted, setIsSubmitted] = useState(false);

  const { mutate } = useSubscribe();

  const handleSubmit = e => {
    e.preventDefault();
    // setIsSubmitted(true);
    mutate(email);
    setEmail('');
    setIsValid(false);
  };

  const handleChange = e => {
    const input = e.target.value;
    setEmail(input);
    setIsValid(/^\S+@\S+\.\S+$/.test(input));
  };

  return (
    <SubscribeContainer>
      <SubscribeBox>
        <SubscribeTitle>Subscribe to our Newsletter</SubscribeTitle>
        <SubscribeText>
          Subscribe up to our newsletter. Be in touch with <br></br>latest news
          and special offers, etc.
        </SubscribeText>
      </SubscribeBox>
      <Form onSubmit={handleSubmit}>
        <label htmlFor="email"></label>
        <Input
          type="email"
          id="email"
          placeholder="Enter your email address"
          value={email}
          onChange={handleChange}
          required
        />
        {/* <span style={{ position: 'absolute', left: '510px', top: '305px' }}>
        <img src={emailIcon} alt="email icon" />
      </span> */}
        <Btn type="submit" disabled={!isValid}>
          Submit
        </Btn>
        {/* {isSubmitted && <p>Thanks you for subscribing to our newsletter!</p>} */}
      </Form>
    </SubscribeContainer>
  );
};
