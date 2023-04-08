import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import {
  QueryClient,
  QueryClientProvider,
  QueryCache,
  MutationCache,
} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { store } from 'redux/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Toaster } from 'react-hot-toast';
import { App } from 'components/App';
import { theme } from './constants';
import { persistor } from 'redux/store';
import { handleErrors } from 'api/helpers';
import './index.css';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, // default: true
    },
  },
  queryCache: new QueryCache({
    onError: axiosError => handleErrors({ axiosError, store, queryClient }),
  }),
  mutationCache: new MutationCache({
    onError: axiosError => handleErrors({ axiosError, store, queryClient }),
  }),
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider theme={theme}>
            <BrowserRouter basename="/command_project_React_Node">
              <App />
              <Toaster position="bottom-right" />
            </BrowserRouter>
          </ThemeProvider>
          <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
        </QueryClientProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
