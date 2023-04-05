import { useState } from 'react';
import { isNil } from 'lodash/lang';
import { validateFormFields } from '../../core/utils/validateFormFields';
import { HiOutlineMail } from 'react-icons/hi';
import { CgLock } from 'react-icons/cg';
import { Icon } from '../Icon/Icon';

import { ERROR_COLOR, SIGNIN_DEFAULT_ERROR_STATE } from '../../constants/form';

export const SigninForm = () => {
  const [signInData, setSignInData] = useState({
    email: '',
    password: '',
  });

  const [signInErrors, setSignInErrors] = useState(SIGNIN_DEFAULT_ERROR_STATE);

  const {
    email,
    password,
  } = signInData;

  const {
    emailError,
    passwordError,
  } = signInErrors

  const handleSignIn = () => {
    const errors = validateFormFields(signInData)


    if (!isNil(errors)) {
      return setSignInErrors(errors);
    }

    setSignInErrors(SIGNIN_DEFAULT_ERROR_STATE);
  }

  return (
    <div className="form-element signin-form">
      <div className="inn">

        <form className="form" autoComplete="off" onSubmit={(e) => e.preventDefault()}>
          <h3>Sign In</h3>
          <div className="field">
            <label htmlFor="email">
              <Icon color={emailError && ERROR_COLOR} element={HiOutlineMail} />
              <input
                className={emailError && 'input-error'}
                id="email"
                type="email"
                name="email"
                value={email}
                placeholder="Email"
                autoComplete="new-email"
                onChange={(e) => setSignInData({...signInData, email: e.target.value})}
              />
            </label>
            {emailError && <div className="field-error-text">{emailError}</div>}
          </div>

          <div className="field">
            <label htmlFor="password">
              <Icon color={passwordError && ERROR_COLOR} element={CgLock} />
              <input
                className={passwordError && 'input-error'}
                id="password"
                type="password"
                value={password}
                name="password"
                placeholder="Password"
                onChange={(e) => setSignInData({...signInData, password: e.target.value})}
              />
            </label>
            {passwordError && <div className="field-error-text">{passwordError}</div>}
          </div>

          <button className="submit-button" onClick={() => handleSignIn()}>Sign In</button>
        </form>

      </div>
    </div>
  );
};
