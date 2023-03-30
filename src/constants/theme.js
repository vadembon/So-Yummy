export const theme = Object.freeze({
  fonts: {
    primary: 'Poppins, sans-serif',
    secondary: 'Montserrat, sans-serif',
    tertiary: 'Inter, sans-serif',
    quaternary: 'Helvetica, sans-serif',
  },
  fontSizes: [8, 10, 12, 14, 16, 18, 20, 24, 28, 32, 44, 48, 60, 72, 100],
  fontWeights: {
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    black: 900,
  },
  colors: {
    primaryDarkText: '#23262A', /// long text of recipy
    secondaryDarkText: '#3E4462', /// titles of recipy, ingredients
    tertiaryDarkText: '#001833', /// title of pages (Favorites, My receipies, categories, search, shopping list
    quaternaryDarkText: '#22252A',

    blackText: '#000000',

    primaryLightText: '#FAFAFA', // in footer,  and in darkTheme

    whiteText: '#ffffff',

    normalDark: '#1E1F28', // buttons
    normalGrey: '#D9D9D9', // buttons, background in add recipy
    darkAccent: '#22252A', // footer
    greenAccent: '#8BAA36', // buttons  , footer in darkTheme

    greenValidation: '#3CBC81', // in forms
    yellowValidation: '#F6C23E',
    redValidation: '#E74A3B',

    lightBackground: '#fafafa',
    primaryDarkBackground: '#1E1F28',
    secondaryDarkBackground: '#22252A',
  },
  radii: {
    none: '0',
    s: '4px',
    m: '6px',
    l: '8px',
    xl: '10px',
    xxl: '12px',
    xxxl: '16px',
    round: '50%',
  },
  
  border: {
    checkbox: '2px solid rgba(126, 126, 126, 0.5)',
    searchBar: ' 1px solid #F0F0F0',
    emailSubscription: '1px solid #FAFAFA',
    userProfile: '1px solid #23262A'
  }
});
