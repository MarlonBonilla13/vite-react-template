import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './index.css'
import { CssBaseline, createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme({
  palette:{
    mode: 'light',
    primary:{
      main: '#001427',
    },
    secondary:{
      main: '#b500d6',
    },
  },
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <CssBaseline />
    <App />
    </ThemeProvider> 
  </React.StrictMode>,
)
