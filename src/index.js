import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ForceLightMode from './lightModeFix';
import DemandeAddPage from './Pages/DemandeAddPage';
import DemandeListPage from './Pages/DemandeListPage';
import HomePage from './Pages/HomePage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: '/demandes/add',
    element: <DemandeAddPage />
  },
  {
    path: '/demandes',
    element: <DemandeListPage />
  }
]);

const config = {
  useSystemColorMode: false,
  initialColorMode: 'light'
};

const lightTheme = extendTheme({ config });

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <ChakraProvider theme={lightTheme}>
      <ForceLightMode>
        <RouterProvider router={router} />
      </ForceLightMode>
    </ChakraProvider>
  </React.StrictMode>
);
