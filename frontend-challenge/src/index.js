import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter } from "react-router-dom";
import { Provider as BumbagProvider } from 'bumbag';
import { ThemeProvider } from 'bumbag';

import App from './App';

const theme = {
  palette: {
    text: '#ffffff',
    primary: '#24282f',
    info: '#1e67d5',
    success: '#0a7d33',
    danger: '#da1717',
    warning: '#ed9c22',
    secondary: '#3c3e44',
    text_heading: '#9e9e9e',
    title_hover: '#de7b2f'
  },
  Link: {
    styles: {
      base: {
        color: "#ffffff",
        fontSize: '400',
      },
      hover: {
        color: "#de7b2f",
        fontSize: '400',
      },
      focus: {
        color: "#de7b2f",
        fontSize: '400',
      }
    }
  }
}

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <BumbagProvider theme={theme}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </BumbagProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

