import  { useState } from 'react';
// import { useUserTheme} from 'api/hooks/useUser';

import { Ball, Checkbox, Label, Switcher } from './ThemeToggler.styled';

export const ThemeToggler = () => {
    const [mode, setMode] = useState('light');
    // const [userTheme, setUserTheme]=useUserTheme()
  
    const changeTheme = () => {
      const newTheme = mode === 'light' ? 'dark' : 'light';
      setMode(newTheme);
    };
  
  
    return (
      <Switcher>
        <Checkbox
          type="checkbox"
          checked={mode === 'dark'}
          id="theme-switcher"
          onChange={changeTheme}
        />
        <Label mode={mode} htmlFor="theme-switcher">
          <Ball />
        </Label>
      </Switcher>
    );
  };