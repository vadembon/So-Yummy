import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { App } from 'components/App';
import { theme } from './constants';
import { RegisterForm } from 'components/RegisterForm';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter basename="/command_project_React_Node">
        <App />
        {/* строку ниже убрать не забудь */}
        {/* <RegisterForm/> */}
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
