import { ThemeProvider } from 'styled-components';
import { theme } from 'constants';
// import { useUserTheme } from 'redux/useUserTheme';

export const CustomThemeProvider = ({ children }) => {
  // const [userTheme] = useUserTheme();

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
