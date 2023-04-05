import React from 'react';

import { Title } from './Title';
import { Navigation } from './Navigation';
import { SubscribeForm } from './SubscribeForm';
import { FollowUs } from './FollowUs';
import { Rights } from './Rights';

import { ContainerDots } from 'commonComponents/BackgroundDots/BackgroundDots.styled';
import { FoterStyle, FoterBox } from './Footer.styled';

export const Footer = () => {
  return (
    <ContainerDots>
      <FoterStyle>
        <FoterBox>
          <Title />

          <Navigation />

          <SubscribeForm />
          <FollowUs />
        </FoterBox>
        <Rights />
      </FoterStyle>
    </ContainerDots>
  );
};
