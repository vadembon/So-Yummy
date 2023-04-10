import React from 'react';
import AUTH_IMG_PATH from '../../assets/images/authpic.svg';
import { SigninForm } from '../../components/SigninForm/SigninForm';
import { RegisterForm } from '../../components/RegisterForm/RegisterForm';
import { SIGNIN_TYPE } from '../../constants/form';

import {AuthPageStyle,InnerWrapper,FlexAuth} from './AuthPage.styled'

export const AuthPage = ({ type }) => {
  return (
    <AuthPageStyle >
      <InnerWrapper >
        <FlexAuth >
          <div className="flex-image">
            <img src={AUTH_IMG_PATH} alt="" />
          </div>

          {type === SIGNIN_TYPE ? <SigninForm /> : <RegisterForm />}
        </FlexAuth>
      </InnerWrapper>
    </AuthPageStyle>
  );
};
