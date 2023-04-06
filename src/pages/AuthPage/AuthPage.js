import React from 'react';
import AUTH_IMG_PATH from '../../assets/images/authpic.svg';
import { SigninForm } from '../../components/SigninForm/SigninForm';
import { RegisterForm } from '../../components/RegisterForm/RegisterForm';
import { SIGNIN_TYPE } from '../../constants/form';

import './style.sass';

export const AuthPage = ({ type }) => {
  return (
    <div className="auth-page">
      <div className="inn">
        <div className="flex">
          <div className="flex-image">
            <img src={AUTH_IMG_PATH} alt="" />
          </div>

          {type === SIGNIN_TYPE ? <SigninForm /> : <RegisterForm />}
        </div>
      </div>
    </div>
  );
};
