import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
// import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// import { store } from 'redux/store';
// import { Provider } from 'react-redux';

import { App } from 'components/App';
import { theme } from './constants';

import './index.css';

// const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
    {/* <QueryClientProvider client={queryClient}> */}
    <ThemeProvider theme={theme}>
      <BrowserRouter basename="/command_project_React_Node">
        <App />
      </BrowserRouter>
    </ThemeProvider>
    {/* </QueryClientProvider> */}
    {/* </Provider> */}
  </React.StrictMode>
);
