import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import MarvelRegularwoff2 from './fonts/MarvelRegular-Dj83.woff2';

const marvelFont = {
  fontFamily: 'MarvelRegular',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 900,
  src: `
      local('MarvelRegular'),
      local('MarvelRegular-Dj83'),
      url(${MarvelRegularwoff2}) format('woff2')
  `,
};

const theme = createMuiTheme({
  typography:{
      fontFamily: ['MarvelRegular'].join(','),
  },
  overrides: {
      MuiCssBaseline: {
          '@global': {
              '@font-face': [marvelFont],
          },
      },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
			  <App />
		</ThemeProvider>,
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

