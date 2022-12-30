import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AuthContextProvider } from './context/AuthContext';
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/system';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <AuthContextProvider>
  

    
      <App />
   
  </AuthContextProvider>
</React.StrictMode>
);

